export const INITIAL_INGEST = "stocks/INITIAL_INGEST";
export const SUBSCRIBE = "stocks/SUBSCRIBE";
export const UPDATE_SUBSCRIPTIONS = "stocks/UPDATE_SUBSCRIPTIONS";

const INITIAL_VALUES = {
  stocks: {},
  supportedStocks: [],
};

export default function reducer(state = INITIAL_VALUES, action) {
  switch (action.type) {
    case INITIAL_INGEST:
      return {
        ...state,
        stocks: action.stocks,
        supportedStocks: action.supportedStocks,
      };
    case UPDATE_SUBSCRIPTIONS:
      return {
        ...state,
        stocks: action.stocks,
      };
    default:
      return state;
  }
}

export function initialIngestStocks(stocks, supportedStocks) {
  return {
    type: INITIAL_INGEST,
    stocks,
    supportedStocks,
  };
}

export function subscribeStock(stocksToSubscribe) {
  console.log("disparado", stocksToSubscribe)
  return {
    type: SUBSCRIBE,
    stocksToSubscribe,
  };
}
export function updateSubscriptions(stocks) {
  return {
    type: UPDATE_SUBSCRIPTIONS,
    stocks,
  };
}
