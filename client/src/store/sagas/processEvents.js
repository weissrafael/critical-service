import { takeLatest, put } from "redux-saga/effects";
import { CREATE, successConnection } from "../reducers/connection";

function* createConnectionSaga({ event }) {
  console.log(event);
  yield put(successConnection());
}

export default function* () {
  yield takeLatest(CREATE, createConnectionSaga);
}
