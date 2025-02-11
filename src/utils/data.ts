import { OptionsProps } from "@/interface";

export const categoriesOptions: OptionsProps[] = [
    { id: "", name: "All Categories" },
    { id: "technology", name: "Technology" },
    { id: "business", name: "Business" },
    { id: "sports", name: "Sports" }
  ]

  export const SourceOptions: OptionsProps[] = [
    { id: "", name: "All Sources" },
    { id: "newsapi", name: "NewsAPI" },
    { id: "guardian", name: "The Guardian" },
    { id: "nytimes", name: "New York Times" },
  ];