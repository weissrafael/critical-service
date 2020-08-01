export const INITIAL_INGEST = "stocks/INITIAL_INGEST";
export const SUBSCRIBE = "stocks/SUBSCRIBE";
export const HANDLE_STOCKS_UPDATES_EVENT = "stock/HANDLE_STOCKS_UPDATES_EVENT";
export const UPDATE = "stocks/UPDATE";

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
    case UPDATE:
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
  return {
    type: SUBSCRIBE,
    stocksToSubscribe,
  };
}
export function updateStocks(stocks) {
  return {
    type: UPDATE,
    stocks,
  };
}

export function handleStocksUpdatesEvent(event) {
  return {
    type: HANDLE_STOCKS_UPDATES_EVENT,
    event,
  };
}
