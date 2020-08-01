import React from "react";
import { render } from "@testing-library/react";

import ConnectionStatus from "./ConnectionStatus";

describe("<ConnectionStatus />", () => {
  it("should match snapshot", () => {
    const { container } = render(<ConnectionStatus connected={true}/>);
    expect(container).toMatchSnapshot();
  });
});
