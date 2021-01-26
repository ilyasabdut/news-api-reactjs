import React, { Component } from "react";
import SingleHeadline from "./SingleHeadlines";
import Featured from "./Featured";
// import Carousels from "./Carousel";
import axios from "axios";

class Headlines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      line: [],
    };
  }

  componentDidMount() {
    let two = "https://today.line.me/id/portaljson/";
    axios.get(two).then((res) => {
      const line = res.data.result.categories;
      const news = res.data.result.categories.templates;
      this.setState({ line, news });
    });
  }

  renderItems() {
    // console.log(this.state.news);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {this.state.line.map((item) => (
              <Featured key={item.id} item={item} />
            ))}
          </div>
          <div className="col-md-9">
            <div className="row">
              {this.state.line.map((item) => (
                <SingleHeadline key={item.id} item={item.templates[10]} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default Headlines;
