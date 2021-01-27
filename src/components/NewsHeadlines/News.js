import React from "react";

const News = ({ item }) => (
  
  <ul>
    {item.templates.map((template) => (
      <li>
        {template.sections.map((sec) => (
          <li>
            {sec.articles.filter(art => art.status === "AVAILABLE").map(
              arts => (console.log(arts.title), (<div>{arts.title}</div>))
            )}
          </li>
        ))}
      </li>
    ))}
  </ul>
);


export default News;
