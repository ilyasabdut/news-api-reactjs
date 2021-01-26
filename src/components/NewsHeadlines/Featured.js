import React from "react";

const Featured = ({item}) => (
  <div className="card">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{item.name}</li>
    </ul>
  </div>
);

export default Featured;
