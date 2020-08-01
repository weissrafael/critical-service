export const INITIAL_INGEST = "stocks/INITIAL_INGEST";

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
        supportedStocks: action.supportedStocks
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
