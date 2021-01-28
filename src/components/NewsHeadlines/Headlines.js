import React, { Component } from "react";
import SingleHeadline from "./SingleHeadlines";
import axios from "axios";

class Headlines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line: [],
    };
  }

  componentDidMount() {
    let url = "https://today.line.me/id/portaljson/";
    axios.get(url).then((res) => {
      const line = res.data.result.categories;
      this.setState({ line });
    });
  }

  renderItems() {
    return (
      <div className="container">
        <div className="col">
          <div className="row">
            {this.state.line.map((item) => (
              <>
                <SingleHeadline key={item.id} item={item} />
              </>
            ))}
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
