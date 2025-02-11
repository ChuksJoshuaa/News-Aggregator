import useFetch from "@/api/useFetch";
import { Articles, Layout, Loader, Pagination, SearchBar } from "@/components";
import { ArticleProps } from "@/interface";
import { setNumberOfPages } from "@/redux/features/newsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect, useState } from "react";

const Home = () => {
  const dispatch = useAppDispatch()
  const { fetchArticles, isFetching, } = useFetch();
  const [isLoading, setIsLoading] = useState(false)
  const { page, pageSize, articleData } = useAppSelector(
    (state) => state.news
  );
  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      await fetchArticles('', {}, false, page, pageSize).then((resp) => {
        if (resp) {
          setTimeout(() => {
            setIsLoading(false)
            dispatch(setNumberOfPages(resp.totalResults ?? 0));
           }, 500)
         }
      })
    };
    fetchData();
  }, [page, pageSize]); 

  return (
    <React.Fragment>
      <Layout>
        <SearchBar isArticleSource={false} />
        <div>
          {isLoading || isFetching ? (
            <div className="flex flex-col justify-center items-center gap-5">
              <Loader />
              <p className="text-lg font-medium leading-lg">Please wait...</p>
            </div>
          ) : (
            <>
              <Articles articles={articleData?.articles as ArticleProps[]} />
              <Pagination />
            </>
          )}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Home