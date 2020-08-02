import React from "react";
import { render } from "@testing-library/react";
import StockToFollow from "./StockToFollow";
import {Provider} from "react-redux";
import {createMockedStore} from "../../utils/testMocks";

describe("<Stock />", () => {
  it("should match snapshot", () => {
    const stock = {
      symbol: 'IEX',
      companyName: 'Test Company',
      basePrice: 0,
      subscribed: true
    }
    const store = createMockedStore();
    const { container } = render(
      <Provider store={store}>
        <StockToFollow stock={stock} ticker={'IEX'}/>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
