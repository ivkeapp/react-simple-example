import React from 'react'

export default function Article({data}) {
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
