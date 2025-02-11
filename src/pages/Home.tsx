import useFetch from "@/api/useFetch";
import { Articles, Layout, Loader, SearchBar, useArticleHook } from "@/components";
import { ArticleProps } from "@/interface";
import React, { useEffect, useState } from "react";

const Home = () => {
  const { fetchArticles, articles, isFetching } = useFetch();
  const { handleSearch} = useArticleHook();
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      await fetchArticles("s", {}, false).then((resp) => {
        if (resp) {
          setTimeout(() => {
            setIsLoading(false)
           }, 500)
         }
      })
    };
    fetchData();
  }, []); 


  return (
    <React.Fragment>
      <Layout>
        <SearchBar onSearch={handleSearch} isArticleSource={false} />

        {isLoading || isFetching ? (
          <div className="flex flex-col justify-center items-center gap-5">
            <Loader />
            <p className="text-lg font-medium leading-lg">Please wait...</p>
          </div>
        ) : (
          <Articles articles={articles?.articles as ArticleProps[]} />
        )}
      </Layout>
    </React.Fragment>
  );
};

export default Home