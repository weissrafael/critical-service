import React from "react";
import { render } from "@testing-library/react";
import Stock from "./Stock";
import configureStore from 'redux-mock-store'
import {Provider} from "react-redux";

describe("<Stock />", () => {
  it("should match snapshot", () => {
    const mockStore = configureStore()
    const store = mockStore({ seu: "objeto que precisa que esteja na store"})
    const stock = {
      symbol: 'IEX',
      companyName: 'Test Company',
      basePrice: 0,
      subscribed: true
    }
    const { container } = render(
      <Provider store={store}>
        <Stock stock={stock} />
      </Provider>);
    expect(container).toMatchSnapshot();
  });
});
