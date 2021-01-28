import React from "react";
import News from "./News";

const SingleHeadline = ({ item }) => (
  <div className="col-md-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">{item.name}</h5>
        <div className="row">
          <>
            <News key={item.id} item={item} />
          </>
        </div>
      </div>
    </div>
  </div>
);

export default SingleHeadline;
