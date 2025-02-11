import useFetch from '@/api/useFetch';
import { useState } from 'react';

const useArticleHook = () => {
  const { fetchArticles } = useFetch()
  const [keyword, setKeyword] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");

  const handleSearch = async (
    keyword: string,
    filters: {
      date: string;
      category: string;
      source: string;
      isArticleSource: boolean;
    }
  ) => {
    await fetchArticles(keyword, filters, filters.isArticleSource);
  };

  return {
    handleSearch,
    keyword,
    setKeyword,
    date,
    setDate,
    category,
    setCategory,
    source, 
    setSource
  }
}

export default useArticleHook