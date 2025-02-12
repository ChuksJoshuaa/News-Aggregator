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

  export const TOP_AUTHORS = [
    {
      id: "David Leonhardt",
      name: "David Leonhardt",
    },
    {
      id: "Maureen Dowd",
      name: "Maureen Dowd",
    },
    {
      id: "Thomas L. Friedman",
      name: "Thomas L. Friedman",
    },
    {
      id: "Paul Krugman",
      name: "Paul Krugman",
    },
    {
      id: "Nicholas Kristof",
      name: "Nicholas Kristof",
    },
  ];


export const PageData = [10, 15, 20];

export const TabData = [
  {
   id: 'personalizedFeed',
   name: 'Personalized Feed'
  },
  {
    id: 'allArticles',
    name: 'All Articles',
  },
  {
    id: 'articleSources',
    name: 'Article Sources',
  }
]