import React from "react";
import { render } from "@testing-library/react";
import Settings from "./Settings";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

describe("<Stock />", () => {
  it("should match snapshot", () => {
    const mockStore = configureStore()
    const store = mockStore({ stocks: ['']})
    const { container } = render(
      <Provider store={store}>
        <Settings/>
      </Provider>
      );
    expect(container).toMatchSnapshot();
  });
});
