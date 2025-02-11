import { GUARDIAN_API_KEY, GUARDIAN_BASE_URL, NEWS_API_KEY, NEWS_BASE_URL } from '@/constants';
import { ArticleListProps } from '@/interface';
import { setArticleData, setGuardianArticleData, setNumberOfPages, setPage, setPageSize } from '@/redux/features/newsSlice';
import { useAppDispatch } from '@/redux/hooks';
import axios from 'axios';
import { useState } from 'react';

const useFetch = () => {
   const [isFetching, setIsFetching] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const dispatch = useAppDispatch()

   const fetchArticles = async (
     keyword: string,
     filters: { date?: string },
     page: number,
     pageSize: number
   ) => {
     setIsFetching(true);
     setError(null);

     try {
       const { date } = filters;
       let response;

      response = await axios.get(`${NEWS_BASE_URL}/everything`, {
        params: {
          q: keyword ? keyword : "news",
          from: date ?? undefined,
          apiKey: NEWS_API_KEY,
          page,
          pageSize,
        },
      });

      dispatch(setArticleData(response.data as ArticleListProps));

      return response.data;
     } catch (_) {
       setError("Failed to fetch articles. Please try again.");
       return [];
     } finally {
       setIsFetching(false);
     }
   };


    const fetchGuardianArticles = async (
      keyword: string,
      filters: { section?: string; date?: string; source?: string; },
      page: number,
      pageSize: number
    ) => {
      setIsFetching(true);
      setError(null);

      try {
        const { section, date, source } = filters;
        const response = await axios.get(`${GUARDIAN_BASE_URL}/search`, {
          params: {
            q: keyword ? keyword : 'news',
            tag: section ? section : undefined,
            section: source ? source : undefined,
            "from-date": date ? date : undefined,
            "api-key": GUARDIAN_API_KEY,
            page,
            pageSize
          },
        });

        const resp = response.data.response;

        dispatch(setNumberOfPages(resp.pages ?? 0));
        dispatch(setPage(resp.currentPage ?? 0));
        dispatch(setPageSize(resp.pageSize ?? 0));
        dispatch(setGuardianArticleData(resp.results ?? []))

        return response.data.response
      } catch (_) {
        setError("Failed to fetch articles. Please try again.");
        return [];
      } finally {
        setIsFetching(false);
      }
    };

  return { isFetching, setIsFetching, error, setError, fetchArticles, fetchGuardianArticles }
}

export default useFetch