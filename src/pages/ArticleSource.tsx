import useFetch from "@/api/useFetch";
import { Layout, SearchBar, useArticleHook } from "@/components";
import React, { useEffect } from "react";

const ArticleSource = () => {
  const { fetchArticles } = useFetch();
  const { handleSearch } = useArticleHook();

  useEffect(() => {
    const fetchData = async () => {
      await fetchArticles("s", {}, true);
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Layout>
        <SearchBar onSearch={handleSearch} isArticleSource={true} />
      </Layout>
    </React.Fragment>
  );
};

export default ArticleSource;
