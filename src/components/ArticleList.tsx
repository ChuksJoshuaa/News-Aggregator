import { ArticleListProps } from '@/interface';
import React from 'react';



const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <div key={index} className="article">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
          <p>Source: {article.source}</p>
          <p>Published: {new Date(article.publishedAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;