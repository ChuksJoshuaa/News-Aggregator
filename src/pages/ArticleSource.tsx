import useFetch from "@/api/useFetch";
import { ArticleSourceList, Layout, Loader, Pagination, SearchBar } from "@/components";
import { GuardianProps } from "@/interface";
import { useAppSelector } from "@/redux/hooks";
import React, { useEffect, useState } from "react";

const ArticleSource = () => {
  const { fetchGuardianArticles } = useFetch();
  const { page, pageSize, guardianArticleData } = useAppSelector((state) => state.news);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      await fetchGuardianArticles("news", {}, page, pageSize).then((resp) => {
        if (resp) {
          setTimeout(() => {
            setIsLoading(false)
          }, 500)
        }
      })
    };
    fetchData();
  }, [page, pageSize]);

  return (
    <React.Fragment>
      <Layout>
        <SearchBar isArticleSource={true} />
        <div>
          {isLoading ? (
            <div className="flex flex-col justify-center items-center gap-5">
              <Loader />
              <p className="text-lg font-medium leading-lg">Please wait...</p>
            </div>
          ) : (
            <>
              {!guardianArticleData || guardianArticleData?.length === 0 ? (
                <div className="flex justify-center items-center">
                  <p className="text-lg text-center leading-lg font-medium">
                    No data available
                  </p>
                </div>
              ) : (
                <ArticleSourceList
                  articles={guardianArticleData as GuardianProps[]}
                />
              )}

              <Pagination />
            </>
          )}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default ArticleSource;
