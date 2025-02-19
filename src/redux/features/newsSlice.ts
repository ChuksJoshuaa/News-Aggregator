import { ArticleListProps, GuardianProps, IIProps, NewYorkProps } from "@/interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IIProps = {
  loading: true,
  searchTerm: "",
  isSidebarOpen: false,
  page: 1,
  pageSize: 10,
  numberOfPages: 0,
  articleData: {} as ArticleListProps,
  guardianArticleData: [] as GuardianProps[],
  newYorkArticleData: {} as NewYorkProps
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

    setGuardianArticleData: (state, action) => {
      state.guardianArticleData = action.payload;
    },

    setNewYorkArticleData: (state, action) => {
      state.newYorkArticleData = action.payload;
    },
  },
});

export const {
  setLoader,
  openSidebar,
  setPage,
  setNumberOfPages,
  setPageSize,
  setArticleData,
  setGuardianArticleData,
  setNewYorkArticleData,
} = newsSlice.actions;

export default newsSlice.reducer;
