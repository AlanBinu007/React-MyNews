import React from "react";
import { render } from "react-testing-library";
import NewsItemContainer from "./NewsItemContainer";
import { StateMock } from "@react-mock/state";

describe("NewsItemContainer", () => {
  it("renders successfully", async () => {
    const source = {
      id: "a",
      name: "Source One"
    };

    const articles = [
      {
        source: {
          id: "a",
          name: "Source One"
        },
        author: "Author One",
        title: "Title One",
        url: "http://url1"
      },
      {
        source: {
          id: "b",
          name: "Source Two"
        },
        author: "Author Two",
        title: "Title Two",
        url: "http://url2"
      }
    ];

    const { getByText } = render(
      <StateMock state={{ articles: articles }}>
        <NewsItemContainer source={source} />
      </StateMock>
    );

    const component_text = getByText(articles[0].title);

    expect(component_text).toBeDefined();
  });
});
