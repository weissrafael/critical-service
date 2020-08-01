export const INITIAL_INGEST = "stocks/INITIAL_INGEST";

const INITIAL_VALUES = {
  stocks: {},
};

export default function reducer(state = INITIAL_VALUES, action) {
  switch (action.type) {
    case INITIAL_INGEST:
      return {
        ...state,
        stocks: action.stocks,
      };
    default:
      return state;
  }
}

export function initialIngestStocks(stocks) {
  return {
    type: INITIAL_INGEST,
    stocks,
  };
}
