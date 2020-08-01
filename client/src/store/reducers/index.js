import { combineReducers } from 'redux'

import connection from "./connection"
import stocks from "./stocks"

const rootReducer = combineReducers({connection, stocks})

export default rootReducer