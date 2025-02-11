import { ArticleList } from "@/components";
import { ArticleListProps } from "@/interface";

const Articles = (props: ArticleListProps) => {
  const { articles } = props
  return (
    <div>
      {!articles || articles?.length === 0 ? (
        <div className="flex justify-center items-center">
          <p className="text-lg text-center leading-lg font-medium">No data available</p>
        </div>
      ) : (
        <ArticleList articles={articles} />
      )}
    </div>
  );
};

export default Articles;
