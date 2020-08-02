import { takeLatest, takeLeading, put, select } from "redux-saga/effects";
import { CREATE, successConnection } from "../reducers/connection";
import {
  initialIngestStocks,
  updateStocks,
  HANDLE_STOCKS_UPDATES_EVENT,
} from "../reducers/stocks";

function* createConnectionSaga({ event }) {
  yield put(successConnection());
  const stocks = {};
  event.stocksData.forEach((stock) => {
    stocks[stock.symbol] = { ...stock, subscribed: false };
  });
  yield put(initialIngestStocks(stocks, event.supportedSymbols));
}

function* updateStocksSaga({ event: { stocks: stocksToUpdate } }) {
  const { stocks } = yield select((store) => store.stocks);
  Object.entries(stocksToUpdate).forEach(([stock, price]) => {
    stocks[stock].basePrice = price;
  });
  yield put(updateStocks(stocks));
}

export default function* () {
  yield takeLatest(CREATE, createConnectionSaga);
  yield takeLeading(HANDLE_STOCKS_UPDATES_EVENT, updateStocksSaga);
}
