import { GUARDIAN_API_KEY, GUARDIAN_BASE_URL } from "@/constants";
import axios from "axios";

export const fetchGuardianArticles = async (
  keyword: string,
  filters: { section?: string; source?: string; date?: string }
) => {
  const { section,  date } = filters;
  const response = await axios.get(`${GUARDIAN_BASE_URL}/search`, {
    params: {
      q: keyword,
      section,
      "from-date": date,
      "api-key": GUARDIAN_API_KEY,
    },
  });
  return response.data.response.results;
};
