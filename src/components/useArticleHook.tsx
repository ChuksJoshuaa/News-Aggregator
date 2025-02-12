import { PersonalizedInfoProps } from '@/interface';
import { getPersonalizedLocalStorage } from '@/utils/useLocalStorage';
import { useState } from 'react';

const useArticleHook = () => {
    const getPersonalizedFromLocalStorage: PersonalizedInfoProps =
      (getPersonalizedLocalStorage()?.data as PersonalizedInfoProps) ?? {};
  const [keyword, setKeyword] = useState(getPersonalizedFromLocalStorage?.keyword || "");
  const [date, setDate] = useState(getPersonalizedFromLocalStorage?.date || "");
  const [category, setCategory] = useState(getPersonalizedFromLocalStorage?.category || "");
  const [source, setSource] = useState(getPersonalizedFromLocalStorage?.source || "");
  const [author, setAuthor] = useState(getPersonalizedFromLocalStorage?.author || "");

  const EmptyInputFields = () => {
    setKeyword("");
    setCategory("");
    setSource("");
    setAuthor("");
    setDate("");
  };
  
  return {
    keyword,
    setKeyword,
    date,
    setDate,
    category,
    setCategory,
    source, 
    setSource,
    author,
    setAuthor,
    EmptyInputFields
  }
}

export default useArticleHook