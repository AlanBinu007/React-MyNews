import React, { Component } from "react";
import _ from "lodash";
import { get_articles } from "../services/newsapi";

import NewsItem from "./NewsItem";

export default class NewsItemContainer extends Component {
  state = {
    articles: []
  };

  async componentDidMount() {
    const _articles = await get_articles(this.props.source.id);

    this.setState({ articles: _.sampleSize(_articles, 5) });
  }

  render() {
    const containerStyle = {
      width: "23rem"
    };
    return (
      <div>
        <div className="card mb-4" style={containerStyle}>
          <div className="card-header">
            <p className="text-center mb-0 font-weight-bold text-uppercase">
              {this.props.source.name}
            </p>
          </div>

          <div className="p-3">
            {this.state.articles.map((article, index) => (
              <NewsItem item={article} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
