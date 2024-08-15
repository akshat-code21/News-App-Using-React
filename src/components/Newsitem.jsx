import React from "react";
import "./Newsitem.css";

const Newsitem = ({ title, description, url }) => {
  
  return (
      <div className="cards">
        <div className="cards-content">
          <h6>
            {title.slice(0,title.indexOf('-'))}
          </h6>
          <p>{title.slice(title.lastIndexOf('-'))}</p>
          <a href={url} target="_blank">
            Read More
          </a>
        </div>
      </div>
  );
};

export default Newsitem;
