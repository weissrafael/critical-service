import { fork, all } from "redux-saga/effects";

import setupConnection from "./setupConnection";
import processEvents from "./processEvents";

export default function* rootSaga() {
  yield all([fork(setupConnection), fork(processEvents)]);
}
