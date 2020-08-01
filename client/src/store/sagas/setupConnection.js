import { eventChannel } from "redux-saga";
import { takeLatest, take, call, race, put, select } from "redux-saga/effects";
import { w3cwebsocket as WebSocket } from "websocket";
import {
  CONFIG,
  configConnection,
  createConnection,
  setConnection,
} from "../reducers/connection";
import {
  SUBSCRIBE,
  UNSUBSCRIBE,
  updateStocks,
  handleStocksUpdatesEvent,
} from "../reducers/stocks";

const EVENT_CONNECTED = "connected";
const STOCKS_UPDATE = "stocks-update";
const CONNECTION_CLOSED = "connection-closed";

function createWebsocketConnection(client) {
  try {
    return eventChannel((emit) => {
      client.onmessage = (event) => {
        emit(event.data);
      };

      client.onopen = () => {
        console.log("WebSocket Client Connected");
      };

      client.onclose = () => {
        const event = { event: CONNECTION_CLOSED };
        emit(JSON.stringify(event));
      };

      const unsubscribe = () => {};

      return unsubscribe;
    });
  } catch (error) {}
}

export function* watchEvents(eventChannel) {
  while (true) {
    const rawEvent = yield take(eventChannel);
    const event = JSON.parse(rawEvent);
    switch (event.event) {
      case EVENT_CONNECTED:
        yield put(createConnection(event));
        break;
      case STOCKS_UPDATE:
        yield put(handleStocksUpdatesEvent(event));
        break;
      case CONNECTION_CLOSED:
        yield put(configConnection());
        break;
      default:
        break;
    }
  }
}

function* configConnectionSaga() {
  try {
    const client = new WebSocket("ws://127.0.0.1:8080");

    const eventChannel = yield call(createWebsocketConnection, client);

    yield put(setConnection(client));

    yield race({
      task: call(watchEvents, eventChannel),
    });
  } catch (error) {}
}

function* subscribeStockSaga({ stocksToSubscribe }) {
  const { connection } = yield select((store) => store.connection);
  const { stocks, supportedStocks } = yield select((store) => store.stocks);
  const filteredStocks = stocksToSubscribe.filter((stock) => {
    return supportedStocks.includes(stock) && !stocks[stock].subscribed;
  });
  if (filteredStocks.length > 0) {
    filteredStocks.forEach((stock) => {
      stocks[stock].subscribed = true;
    });
    yield put(updateStocks(stocks));
    const payload = {
      event: "subscribe",
      stocks: filteredStocks,
    };
    connection.send(JSON.stringify(payload));
  }
}

function* unsubscribeStockSaga({ stocksToUnsubscribe }) {
  const { connection } = yield select((store) => store.connection);
  const { stocks, supportedStocks } = yield select((store) => store.stocks);
  const filteredStocks = stocksToUnsubscribe.filter((stock) => {
    return supportedStocks.includes(stock) && stocks[stock].subscribed;
  });
  if (filteredStocks.length > 0) {
    filteredStocks.forEach((stock) => {
      stocks[stock].subscribed = false;
    });
    yield put(updateStocks(stocks));
    const payload = {
      event: "unsubscribe",
      stocks: filteredStocks,
    };
    connection.send(JSON.stringify(payload));
  }
}

export default function* () {
  yield takeLatest(CONFIG, configConnectionSaga);
  yield takeLatest(SUBSCRIBE, subscribeStockSaga);
  yield takeLatest(UNSUBSCRIBE, unsubscribeStockSaga);
}
