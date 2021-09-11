import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";
import { StateMock } from "@react-mock/state";

// jest.mock("./services/newsapi");

afterEach(cleanup);

describe("App", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<App />);

    const app_title = getByText(/^news app - react$/i);

    expect(app_title).toBeDefined();
  });

  it("renders NewsItemContainer", async () => {
    const source1 = {
      id: "a",
      name: "Source One"
    };

    const source2 = {
      id: "b",
      name: "Source Two"
    };

    const source3 = {
      id: "c",
      name: "Source Three"
    };

    const sources = {
      sources: [source1, source2, source3]
    };

    const { getByText } = render(
      <StateMock state={sources}>
        <App />
      </StateMock>
    );

    const component_text = getByText("Source Three");

    expect(component_text).toBeDefined();
  });
});
