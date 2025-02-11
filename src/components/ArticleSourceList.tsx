import { GuardianListProps } from "@/interface";

const ArticleSourceList = ({ articles }: GuardianListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 w-full">
      {articles?.map((article, index) => (
        <div
          key={index}
          className="border border-gray-300 p-4 rounded-md shadow-sm"
        >
          <h2 className="text-lg font-semibold text-blue-900 mb-3 leading-relaxed">
            {article.sectionName}
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            {(article?.webTitle?.length ?? 0) > 150
              ? `${article?.webTitle?.slice(0, 150)}...`
              : article.webTitle}
            <span>
              {(article?.webTitle?.length ?? 0) > 150 && (
                <a
                  href={article.webUrl ?? article?.apiUrl}
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
              Type: {article?.type}
            </p>
            <p className="text-red-600 font-semibold">
              Published:{" "}
              {new Date(article.webPublicationDate ?? "").toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleSourceList;
