import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../firebase/setup";

function Home(props) {
  const [news, setNews] = useState([]);
  // console.log(news);

  const addNews = async (data) => {
    const newsDoc = doc(database, "News", `${data.url.substr(-10, 10)}`);
    try {
      await setDoc(newsDoc, {
        title: data.title,
        description: data.description,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getNews = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=${props.menu}&apiKey=5b2eb67f661f40599d9a0ac3bc225944`
    )
      .then((res) => res.json())
      .then((json) => setNews(json.articles));
  };

  useEffect(() => {
    getNews();
  }, [news]); // to run everytime the news

  return (
    <div className="mt-12 p-5 grid grid-cols-4">
      {news
        .filter(
          (data) =>
            data.urlToImage && data.title !== "removed" && data.description
        )
        .map((data, index) => (
          <Link
            to="/details"
            state={{ data: data }}
            onClick={() => addNews(data)}
          >
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <img
                className="w-full"
                src={data.urlToImage} // Use actual image URL or a fallback
                alt=""
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.title}</div>
                <p className="text-gray-700 text-base">{data.content}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default Home;
