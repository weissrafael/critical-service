import React from "react";
import { render } from "@testing-library/react";

import Stock from "./Stock";

describe("<Stock />", () => {
  it("should match snapshot", () => {
    const stock = {
      symbol: 'IEX',
      companyName: 'Test Company',
      basePrice: 0,
      subscribed: true
    }
    const { container } = render(<Stock stock={stock} viewMode={'cards'}/>);
    expect(container).toMatchSnapshot();
  });
});
