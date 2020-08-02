import React from "react";
import { render } from "@testing-library/react";

import CheckBox from "./CheckBox";

describe("<Stock />", () => {
  it("should match snapshot", () => {
    const { container } = render(<CheckBox check={false}/>);
    expect(container).toMatchSnapshot();
  });
});
