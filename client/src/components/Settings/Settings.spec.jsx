import React from "react";
import { render } from "@testing-library/react";
import GetAppIcon from '@material-ui/icons/GetApp';

import Settings from "./Stock";

describe("<Stock />", () => {
  it("should match snapshot", () => {
    const stock = {
      symbol: 'IEX',
      companyName: 'Test Company',
      basePrice: 0,
      subscribed: true
    }
    const { container } = render(<Settings stock={{}}/>);
    expect(container).toMatchSnapshot();
  });
});
