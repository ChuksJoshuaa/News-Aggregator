import useFetch from "@/api/useFetch";
import { ArticleSourceList, Layout, Loader, Pagination, SearchBar } from "@/components";
import { GuardianProps, PersonalizedInfoProps } from "@/interface";
import { useAppSelector } from "@/redux/hooks";
import { getPersonalizedLocalStorage } from "@/utils/useLocalStorage";
import React, { useEffect, useState } from "react";

const ArticleSource = () => {
  const { fetchGuardianArticles } = useFetch();
  const { page, pageSize, guardianArticleData } = useAppSelector((state) => state.news);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      const storedData =
        (getPersonalizedLocalStorage()?.data as PersonalizedInfoProps) ?? {};

      const keyword = storedData.keyword ?? "news";
      const date = storedData.date ?? "";
      const source = storedData.source ?? "";
      const section = storedData.category ?? "";

      const resp = await fetchGuardianArticles(
        keyword,
        { date, source, section },
        page,
        pageSize
      );
      if (resp) {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };
    fetchData();
  }, [page, pageSize]);

  return (
    <React.Fragment>
      <Layout>
        <SearchBar isArticleSource={true} isPersonalizedFeed={false} />
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
