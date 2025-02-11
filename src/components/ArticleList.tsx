import { ArticleListProps } from '@/interface';
import React from 'react';

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5">
      {articles?.slice(0, 5)?.map((article, index) => (
        <div
          key={index}
          className="border border-gray-300 p-4 rounded-md shadow-sm"
        >
          <h2 className="text-lg font-semibold text-blue-900 mb-3 leading-relaxed">
            {article.title}
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            {(article?.description?.length ?? 0) > 150
              ? `${article?.description?.slice(0, 150)}...`
              : article.description}
            <span>
              {(article?.description?.length ?? 0) > 150 && (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline mt-2 inline-block"
                >
                  Read more
                </a>
              )}
            </span>
          </p>

          <div className="flex items-center justify-between text-sm text-gray-700 mt-5">
            <p className="font-medium">
              Source: {article?.source?.name ?? "Unknown"}
            </p>
            <p className="text-red-600 font-semibold">
              Published:{" "}
              {new Date(article.publishedAt ?? "").toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;