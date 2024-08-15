import React from "react";
import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import "./Newsboard.css";

const Newsboard = ({category}) => {

  let data;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getNews() {
      let article = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=000f2c37b774467aa1b36d3c99395644`
      );
      data = await article.json();
      console.log(data);
      setArticles(data.articles);
    }
    getNews();
  }, [category]);

  return (
    <div className="black">
      <h2 className="text-center underline">Latest News</h2>
      <div className="parent">
        {articles.map((news, index) => {
          return (
            <Newsitem
              key={index}
              title={news.title}
              desc={news.description}
              url={news.url}
            ></Newsitem>
          );
        })}
      </div>
    </div>
  );
};

export default Newsboard;
