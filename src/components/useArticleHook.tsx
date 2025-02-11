import { useState } from 'react';

const useArticleHook = () => {
  const [keyword, setKeyword] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  
  return {
    keyword,
    setKeyword,
    date,
    setDate,
    category,
    setCategory,
    source, 
    setSource,
  }
}

export default useArticleHook