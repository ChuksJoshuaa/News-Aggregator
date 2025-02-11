import { NEWS_API_KEY, NEWS_BASE_URL } from "@/constants";
import axios from "axios";

export const fetchArticles = async (
  keyword: string,
  filters: { category?: string; source?: string; date?: string }
) => {
  const { category, source, date } = filters;
  const response = await axios.get(`${NEWS_BASE_URL}/everything`, {
    params: {
      q: keyword,
      category,
      sources: source,
      from: date,
      apiKey: NEWS_API_KEY,
    },
  });
  return response.data.articles;
};
