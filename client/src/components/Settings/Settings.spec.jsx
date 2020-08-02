import React from "react";
import { render } from "@testing-library/react";
import GetAppIcon from '@material-ui/icons/GetApp';

import Settings from "./Settings";

describe("<Stock />", () => {
  it("should match snapshot", () => {
    const { container } = render(<Settings stock={{}}/>);
    expect(container).toMatchSnapshot();
  });
});
