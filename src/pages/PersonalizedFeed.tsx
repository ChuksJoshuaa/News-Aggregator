import { Layout, SearchBar } from "@/components"
import React from "react"

const PersonalizedFeed = () => {
  return (
    <React.Fragment>
      <Layout>
        <SearchBar isArticleSource={false} isPersonalizedFeed={true} />
      </Layout>
    </React.Fragment>
  );
}

export default PersonalizedFeed