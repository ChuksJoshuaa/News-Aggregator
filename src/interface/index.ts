export type ChildrenProps = {
  children: React.ReactNode;
};

export interface IIProps {
  loading: boolean;
  searchTerm: string;
  isSidebarOpen: boolean;
}

export interface Article {
  title: string;
  description: string;
  url: string;
  source: string;
  publishedAt: string;
}

export interface ArticleListProps {
  articles: Article[];
}

export interface SearchBarProps {
  onSearch: (
    keyword: string,
    filters: { date: string; category: string; source: string }
  ) => void;
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
  name: string
}

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