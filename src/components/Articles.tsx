import { ArticleList, useArticleHook } from "@/components";
import React from "react";

const Articles: React.FC = () => {
  const { articles } = useArticleHook();
  
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Articles;
