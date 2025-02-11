import { ArticleListProps, IIProps } from "@/interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IIProps = {
  loading: true,
  searchTerm: "",
  isSidebarOpen: false,
  page: 1,
  pageSize: 5,
  numberOfPages: 0,
  articleData: {} as ArticleListProps,
};

export const newsSlice = createSlice({
  name: "news",

  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loading = action.payload;
    },

    openSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },

    setPage: (state, action) => {
      state.page = action.payload;
    },
    setNumberOfPages: (state, action) => {
      state.numberOfPages = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setArticleData: (state, action) => {
      state.articleData = action.payload;
    },
  },
});

export const { setLoader, openSidebar, setPage, setNumberOfPages, setPageSize, setArticleData } =
  newsSlice.actions;

export default newsSlice.reducer;
