import { Articles, Layout, SearchBar, useArticleHook } from "@/components";
import React from "react";

const Home = () => {
  const { handleSearch} = useArticleHook()
  return (
    <React.Fragment>
      <Layout>
        <SearchBar onSearch={handleSearch} />
        <Articles />
      </Layout>
    </React.Fragment>
  );
};

export default Home;
