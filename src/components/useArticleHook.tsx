import { fetchArticles } from '@/api/newsApi';
import { useState } from 'react';

const useArticleHook = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [keyword, setKeyword] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");

  const handleSearch = async (
    keyword: string,
    filters: { date: string; category: string; source: string }
  ) => {
    setIsSubmitting(true)
    const data = await fetchArticles(keyword, filters);
   
    setTimeout(() => {
      setIsSubmitting(false)
      setArticles(data);
    }, 500)
  };

  return {
    articles,
    setArticles,
    handleSearch,
    isSubmitting,
    setIsSubmitting,
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