import useFetch from "@/api/useFetch"
import { Layout, Loader, Pagination, PersonalizedArticleList, PersonalizedContent, SearchBar } from "@/components"
import { PersonalizedInfoProps, TimeProps } from "@/interface"
import { useAppSelector } from "@/redux/hooks"
import { getPersonalizedLocalStorage } from "@/utils/useLocalStorage"
import React, { useEffect, useState } from "react"

const PersonalizedFeed = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { fetchNYTArticles, isFetching } = useFetch();
  const { page, pageSize, newYorkArticleData } = useAppSelector(
    (state) => state.news
  );

  useEffect(() => {
    setIsLoading(true)

    const fetchData = async () => {
      const storedData =
        (getPersonalizedLocalStorage()?.data as PersonalizedInfoProps) ?? {};

      const keyword = storedData.keyword ?? "";
      const date = storedData.date ?? "";
      const source = storedData.source ?? "";
      const author = storedData.author ?? "";
      const category = storedData.category ?? "";

      await fetchNYTArticles(
        keyword,
        { category, date, source, author },
        page,
        pageSize
      ).then((resp) => {
        if (resp) {
          setTimeout(() => {
            setIsLoading(false)
          }, 500);
        }
      });
    }

    fetchData()
  
  }, [page, pageSize])


  return (
    <React.Fragment>
      <Layout>
        <SearchBar isArticleSource={false} isPersonalizedFeed={true} />

        <div className="flex flex-col gap-3">
          <PersonalizedContent />

          {isLoading || isFetching ? (
            <div className="flex flex-col justify-center items-center gap-5">
              <Loader />
              <p className="text-lg font-medium leading-lg">Please wait...</p>
            </div>
          ) : (
            <>
              <PersonalizedArticleList
                articles={newYorkArticleData?.docs as unknown as TimeProps[]}
              />
              <Pagination />
            </>
          )}
        </div>
      </Layout>
    </React.Fragment>
  );
}

export default PersonalizedFeed