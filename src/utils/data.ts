import { OptionsProps } from "@/interface";

export const categoriesOptions: OptionsProps[] = [
    { id: "technology", name: "Technology" },
    { id: "business", name: "Business" },
    { id: "sports", name: "Sports" },
    { id: "entertainment", name: "Entertainment" },
  ]

  export const SourceOptions: OptionsProps[] = [
    { id: "basketball", name: "Basketball" },
    { id: "football", name: "Football" },
    { id: "tennis", name: "Tennis" },
    { id: "automobile", name: "Automobile" },
  ];


export const PageData = [10, 15, 20];

export const TabData = [
  {
    id: 'allArticles',
    name: 'All Articles',
  },
  {
    id: 'articleSources',
    name: 'Article Sources',
  }
]