import React from 'react'
import {useState, useEffect} from "react";

export default function Article() {

    const [data, setArticleData] = useState([]);

    const fetchArticleData = async () =>  {
      return await fetch("https://api.nytimes.com/svc/semantic/v2/concept/name/nytd_geo/Serbia?fields=article_list&api-key=YOURKEY")
            .then((response) => response.json())
            .then((data) => setArticleData(data.results[0].article_list.results));
    }
    
  
    useEffect(() => {
      document.body.style.backgroundColor = "#eeeeee";
      fetchArticleData();
    }, []);

    return (
           <div>{data.map((article, index) => (
               <div className="article" key={index}>
                   <h4><a target="_blank" rel="noreferrer" href={article.url}>{article.title}</a></h4>
                   <p>{article.body}</p>
                   <p className="text-end text-date">{article.date}</p>
               </div>
           ))}</div>
        
    )
}
