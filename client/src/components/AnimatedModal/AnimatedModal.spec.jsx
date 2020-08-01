import React from "react";
import { render } from "@testing-library/react";

import AnimatedModal from "./AnimatedModal";

describe("<AnimatedModal />", () => {
  it("should match snapshot if is open", () => {
    const { container } = render(<AnimatedModal isOpen />);
    expect(container).toMatchSnapshot();
  });

  it("should match snapshot if is closed", () => {
    const { container } = render(<AnimatedModal isOpen={false} />);
    expect(container).toMatchSnapshot();
  });
});
