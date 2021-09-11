import React, { Component } from "react";
import _ from "lodash";
import { get_sources } from "./services/newsapi";

import NewsItemContainer from "./components/NewsItemContainer";

class App extends Component {
  state = {
    sources: []
  };

  async componentDidMount() {
    const _sources = await get_sources();

    this.setState({ sources: _.sampleSize(_sources, 3) });
  }

  render() {
    const header_style = {
      textAlign: "center"
    };

    return (
      <div className="container-fluid">
        <div className="m-5" style={header_style}>
          <h1>News App - React</h1>
        </div>

        <div className="d-flex justify-content-between flex-wrap m-4">
          {this.state.sources.map((source, index) => (
            <NewsItemContainer source={source} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
