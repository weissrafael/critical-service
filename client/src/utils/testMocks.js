import configureStore from "redux-mock-store";

export const createMockedStore = () => {
  const mockStore = configureStore()
  return mockStore({
    stocks: {
      stocks: {IEX: {symbol: '', companyName: '', basePrice: 0, subscribed: 'test'}},
      supportedStocks: ['IEX']
    }
  })
}
