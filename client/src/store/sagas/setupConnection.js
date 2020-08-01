import { eventChannel, END } from "redux-saga";
import { takeLatest, take, call, race, put } from "redux-saga/effects";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { CONFIG, createConnection } from "../reducers/connection";

const EVENT_CONNECTED = "connected"

function createWebsocketConnection(client) {
  try {
    const client = new W3CWebSocket("ws://127.0.0.1:8080");
    return eventChannel((emit) => {
      client.onmessage = (event) => {
        emit(event.data);
      };

      client.onopen = () => {
        console.log("WebSocket Client Connected");
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
      default:
    }
    // yield put({ type: WS_NEW_EVENT, payload: JSON.parse(event) })
  }
}

function* configConnectionSaga() {
  try {
    const client = new WebSocket("ws://127.0.0.1:8080");

    const eventChannel = yield call(createWebsocketConnection, client);

    yield race({
      task: call(watchEvents, eventChannel),
    });
  } catch (error) {}
}

export default function* () {
  yield takeLatest(CONFIG, configConnectionSaga);
}
