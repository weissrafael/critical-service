import React from "react";
import { render } from "@testing-library/react";
import GetAppIcon from '@material-ui/icons/GetApp';

import Stock from "./NavButton";

describe("<NavButton />", () => {
  it("should match snapshot", () => {
    const dummyFunction = () => {}
    const { container } = render(<Stock text="myBtn" onClick={dummyFunction} Icon={GetAppIcon}/>);
    expect(container).toMatchSnapshot();
  });
});
