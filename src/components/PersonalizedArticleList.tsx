import { PersonalizedArticleListProps } from "@/interface";


const PersonalizedArticleList = ({
  articles,
}: PersonalizedArticleListProps) => {
  return (
    <>
      {!articles || (articles?.length ?? 0) === 0 ? (
        <div className="flex justify-center items-center">
          <p className="text-lg text-center leading-lg font-medium">
            No data available
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 w-full">
          {articles?.map((article, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 rounded-md shadow-sm"
              data-testid="article-item"
            >
              <h2
                className="text-lg font-semibold text-blue-900 mb-3 leading-relaxed"
                data-testid="article-title"
              >
                {article?.headline?.main}
              </h2>
              <p
                className="text-gray-700 text-sm leading-relaxed"
                data-testid="article-description"
              >
                {(article?.lead_paragraph?.length ?? 0) > 150
                  ? `${article?.lead_paragraph?.slice(0, 150)}...`
                  : article.lead_paragraph}
                <span>
                  {(article?.lead_paragraph?.length ?? 0) > 150 && (
                    <a
                      href={article.web_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:underline mt-2 inline-block"
                      data-testid="read-more"
                    >
                      Read more
                    </a>
                  )}
                </span>
              </p>

              <div className="flex items-center justify-between text-sm text-gray-700 mt-5">
                <p className="font-medium">Category: {article?.news_desk}</p>
                <p
                  className="text-red-600 font-semibold"
                  data-testid="article-date"
                >
                  Published:{" "}
                  {new Date(article.pub_date ?? "").toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PersonalizedArticleList