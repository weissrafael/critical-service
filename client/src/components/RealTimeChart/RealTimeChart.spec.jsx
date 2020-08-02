import React from "react";
import { render } from "@testing-library/react";

import RealTimeChart from "./RealTimeChart";

describe("<Stock />", () => {
  it("should match snapshot", () => {
    const { container } = render(<RealTimeChart basePrice={30}/>);
    expect(container).toMatchSnapshot();
  });
});
