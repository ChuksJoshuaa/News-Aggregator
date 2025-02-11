import { GUARDIAN_API_KEY, GUARDIAN_BASE_URL, NEWS_API_KEY, NEWS_BASE_URL } from '@/constants';
import { ArticleListProps } from '@/interface';
import axios from 'axios';
import { useState } from 'react';

const useFetch = () => {
   const [isFetching, setIsFetching] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [articles, setArticles] = useState<ArticleListProps | null>(null);

   const fetchArticles = async (
     keyword: string,
     filters: { category?: string; source?: string; date?: string },
     isArticleSource: boolean
   ) => {
     setIsFetching(true);
     setError(null);

     try {
       const { date, category } = filters;
       let response;

       if (isArticleSource) {
         response = await axios.get(`${NEWS_BASE_URL}/top-headlines/sources`, {
           params: { category, apiKey: NEWS_API_KEY },
         });
       } else {
         response = await axios.get(`${NEWS_BASE_URL}/everything`, {
           params: { q: keyword, from: date, apiKey: NEWS_API_KEY },
         });

         setArticles(response.data as ArticleListProps);
       }

       console.log(response.data);
       return response.data;
     } catch (err) {
       console.error("Error fetching articles:", err);
       setError("Failed to fetch articles. Please try again.");
       return [];
     } finally {
       setIsFetching(false);
     }
   };


    const fetchGuardianArticles = async (
      keyword: string,
      filters: { section?: string; source?: string; date?: string }
    ) => {
      setIsFetching(true);
      setError(null);

      try {
        const { section, date } = filters;
        const response = await axios.get(`${GUARDIAN_BASE_URL}/search`, {
          params: {
            q: keyword,
            section,
            "from-date": date,
            "api-key": GUARDIAN_API_KEY,
          },
        });

        return response.data.response.results;
      } catch (err) {
        console.error("Error fetching Guardian articles:", err);
        setError("Failed to fetch articles. Please try again.");
        return [];
      } finally {
        setIsFetching(false);
      }
    };

  return { articles, isFetching, setIsFetching, error, setError, fetchArticles, fetchGuardianArticles }
}

export default useFetch