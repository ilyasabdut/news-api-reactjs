import React from "react";
import "./News.css";

let urlToImage = "https://obs.line-scdn.net/";

const News = ({ item }) => (
  <div>
    {item.templates.map((template) => (
      <div>
        {template.sections.map((sec) => (
          <div className="row">
            {sec.articles
              .filter((art) => art.status === "AVAILABLE")
              .map((arts) => (
                <div className="col-md-6 mb-3">
                  <div className="card ">
                    <div className="center-cropped">
                      <img
                        className="card-image"
                        src={urlToImage + arts.thumbnail.hash + "/w280"}
                        alt="thumbnail"
                      />
                    </div>

                    <div className="card-body text-center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={arts.url.url}
                      >
                        <h7 className="card-title ">{arts.title}</h7>
                      </a>
                      <div className="card-footer bg-transparent text-muted">
                        {arts.publisher}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    ))}{" "}
  </div>
);

export default News;
