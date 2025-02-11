import axios from "axios";

const API_KEY = "YOUR_NYTIMES_KEY";
const BASE_URL = "https://api.nytimes.com/svc";

export const fetchNYTArticles = async (
  keyword: string,
  filters: { section?: string; source?: string; date?: string }
) => {
  const { section, date } = filters;
  const response = await axios.get(`${BASE_URL}/search/v2/articlesearch.json`, {
    params: {
      q: keyword,
      fq: section,
      begin_date: date,
      "api-key": API_KEY,
    },
  });
  return response.data.response.docs;
};
