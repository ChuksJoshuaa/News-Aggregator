import { GUARDIAN_API_KEY, GUARDIAN_BASE_URL, NEW_YORK_TIMES_API_KEY, NEW_YORK_TIMES_BASE_URL, NEWS_API_KEY, NEWS_BASE_URL } from '@/constants';
import { ArticleListProps, GuardianProps } from '@/interface';
import { setArticleData, setGuardianArticleData, setNewYorkArticleData, setNumberOfPages, setPage } from '@/redux/features/newsSlice';
import { useAppDispatch } from '@/redux/hooks';
import axios from 'axios';
import { useState } from 'react';

const useFetch = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

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
          from: date ? date : undefined,
          apiKey: NEWS_API_KEY,
          page,
          pageSize,
        },
      });

      dispatch(setArticleData(response.data as ArticleListProps));

      return response.data;
    } catch (_) {
      setError("Failed to fetch articles. Please try again.");
      dispatch(setArticleData({} as ArticleListProps));
      return [];
    } finally {
      setIsFetching(false);
    }
  };

  const fetchGuardianArticles = async (
    keyword: string,
    filters: { section?: string; date?: string; source?: string },
    page: number,
    pageSize: number
  ) => {
    setIsFetching(true);
    setError(null);

    try {
      const { section, date, source } = filters;
      const response = await axios.get(`${GUARDIAN_BASE_URL}/search`, {
        params: {
          q: keyword ? keyword : "news",
          tag: section ? section : undefined,
          section: source ? source : undefined,
          "from-date": date ? date : undefined,
          "api-key": GUARDIAN_API_KEY,
          page,
          pageSize,
        },
      });

      const resp = response.data.response;

      dispatch(setNumberOfPages(resp.pages ?? 0));
      dispatch(setPage(resp.currentPage ?? 0));
      dispatch(setGuardianArticleData(resp.results ?? []));

      return response.data.response;
    } catch (_) {
      setError("Failed to fetch articles. Please try again.");
      dispatch(setGuardianArticleData([] as GuardianProps[]));
      return [];
    } finally {
      setIsFetching(false);
    }
  };

  const fetchNYTArticles = async (
    keyword: string,
    filters: {
      date?: string;
      category?: string;
      source?: string;
      author?: string;
    },
    page: number, 
    pageSize: number
  ) => {
    const { date, category, source, author } = filters;

    const params: Record<string, string | number> = {
      q: keyword,
      "api-key": NEW_YORK_TIMES_API_KEY,
      page, 
      pageSize
    };

    if (date) params.begin_date = date.replace(/-/g, "");
    if (category) params.fq = `news_desk:("${category}")`; 
    if (source) params.fq = `source:("${source}")`; 
    if (author) params.fq = `byline:("${author}")`; 

    setIsFetching(true)

    try {
      const response = await axios.get(NEW_YORK_TIMES_BASE_URL, { params });
      const articles = response.data.response.docs;
      const totalResults = response.data.response.meta.hits; 

      dispatch(setNumberOfPages(totalResults));

      dispatch(
        setNewYorkArticleData({
          docs: articles,
        })
      );

      return {
        articles, 
        totalResults, 
        page, 
        pageSize, 
      };
    } catch (_) {
      dispatch(
        setNewYorkArticleData({
          docs: [],
        })
      );
      return {
        articles: [],
        totalResults: 0,
        page,
        pageSize,
      };
    }
    finally {
      setIsFetching(false)
    }
  };

  return {
    isFetching,
    setIsFetching,
    error,
    setError,
    fetchArticles,
    fetchGuardianArticles,
    fetchNYTArticles,
  };
}

export default useFetch