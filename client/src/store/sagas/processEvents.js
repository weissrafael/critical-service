import { takeLatest, put } from "redux-saga/effects";
import { CREATE, successConnection } from "../reducers/connection";
import { initialIngestStocks } from "../reducers/stocks";

function* createConnectionSaga({ event }) {
  yield put(successConnection());
  const stocks = {}
  event.stocksData.forEach(stock => {
    stocks[stock.symbol] = {...stock, subscribed: false}
  });
  yield put(initialIngestStocks(stocks));
}

export default function* () {
  yield takeLatest(CREATE, createConnectionSaga);
}