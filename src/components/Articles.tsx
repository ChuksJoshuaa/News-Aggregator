import { ArticleList } from "@/components";
import { ArticleListProps } from "@/interface";

const Articles = (props: ArticleListProps) => {
  const { articles} = props
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Articles;
