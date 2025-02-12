export type ChildrenProps = {
  children: React.ReactNode;
};

export interface SearchBarProps {
  isArticleSource: boolean;
  isPersonalizedFeed?: boolean;
}

export interface SelectDropdownProps {
  options: { id: string | number; name: string }[];
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  id: string;
  className?: string;
  error?: boolean;
  label?: string;
  placeholder?: string;
}

export type OptionsProps = {
  id: string;
  name: string;
};

export interface DateInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id: string;
  name: string;
  label?: string;
}

export interface TextInputProps {
  label?: string;
  name: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  className?: string;
}

export interface ArticleProps {
  source?: {
    id: string | null;
    name: string;
  };
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string | null;
  publishedAt?: string;
  content?: string;
}

export interface ArticleListProps {
  articles: ArticleProps[];
  status?: string;
  count?: number;
}

export type GuardianProps = {
  id?: string;
  type?: string;
  sectionId?: string;
  sectionName?: string;
  webPublicationDate?: string;
  webTitle?: string;
  webUrl?: string;
  apiUrl?: string;
  isHosted?: boolean;
  pillarId?: string;
  pillarName?: string;
};

export interface GuardianListProps {
  articles: GuardianProps[];
}

export type TimeProps = {
  headline: {
    main: string
  },
  pub_date: string,
  web_url: string,
  lead_paragraph: string,
  news_desk: string
}

export type NewYorkProps = {
  docs: Record<string, [TimeProps[]]>;
};

export interface IIProps {
  loading: boolean;
  searchTerm: string;
  isSidebarOpen: boolean;
  page: number;
  pageSize: number;
  numberOfPages: number;
  articleData: ArticleListProps;
  guardianArticleData: GuardianProps[];
  newYorkArticleData: NewYorkProps;
}

export interface Tab {
  id: string;
  name: string;
}

export interface TabsProps {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  tabs: Tab[];
  getTabClass: (isSelected: boolean) => string;
  selectedTab?: string;
  setSelectedTab?: (tab: string) => void;
}

export interface PersonalizedInfoProps {
  keyword?: string;
  date?: string;
  category?: string;
  source?: string;
  author?: string;
}

export interface PersonalizedArticleListProps {
  articles: TimeProps[];
}