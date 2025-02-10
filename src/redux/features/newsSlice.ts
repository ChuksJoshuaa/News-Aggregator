import { createSlice } from "@reduxjs/toolkit";
import { IIProps } from "@/interface";

const initialState: IIProps = {
  loading: true,
  searchTerm: "",
  isSidebarOpen: false,
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
  },
});

export const {
  setLoader,
  openSidebar,
} = newsSlice.actions;

export default newsSlice.reducer;
