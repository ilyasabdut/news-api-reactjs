import React from "react";
import News from "./News";

const SingleHeadline = ({ item }) => (
  <div className="col-md-3 col-mb-3">
    <div className="card">
      <img className="img-fluid" alt="" />
      <div className="card-body">
        <a>
          <h5 className="card-title">{item.name}</h5>
        </a>
        <span></span>
        <p className="card-title"></p>
      </div>
      <News key={item.id} item={item} />
    </div>
  </div>
);

export default SingleHeadline;
