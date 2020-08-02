import React from "react";
import { render } from "@testing-library/react";
import Settings from "./Settings";
import {Provider} from "react-redux";
import {createMockedStore} from "../../utils/testMocks";

describe("<Stock />", () => {
  it("should match snapshot", () => {
    const store = createMockedStore()
    const { container } = render(
      <Provider store={store}>
        <Settings allCheckForTestOnly={'tested'}/>
      </Provider>
      );
    expect(container).toMatchSnapshot();
  });
});
