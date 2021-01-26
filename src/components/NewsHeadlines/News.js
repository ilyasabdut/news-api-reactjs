import React from "react";

const News = ({ item }) => (
  <div className="col-md-3 mb-3">
    <div className="card">
      <img className="img-fluid" src={item.urlToImage} alt="" />
      <div className="card-body">
        <a href={item.url}>
          <h5 className="card-title">{item.name}</h5>
        </a>
        <span>{item.author}</span>
        {/* <p className="card-title">{item.description}</p> */}
      </div>
    </div>
  </div>
);

export default News;
