import React from "react";
import { render } from "@testing-library/react";
import GetAppIcon from '@material-ui/icons/GetApp';

import StockToFollow from "./StockToFollow";

describe("<Stock />", () => {
  it("should match snapshot", () => {
    const stock = {
      symbol: 'IEX',
      companyName: 'Test Company',
      basePrice: 0,
      subscribed: true
    }
    const { container } = render(<StockToFollow stock={stock} ticker={'IEX'}/>);
    expect(container).toMatchSnapshot();
  });
});
