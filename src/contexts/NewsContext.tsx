import { createContext } from "react";
import { NewsArticle } from "../models/NewsArticle";

export interface NewsContextProps {
  news: NewsArticle[];
  error: string | null;
  loading: boolean;
  refetch: () => Promise<void>;
}

export const NewsContext = createContext<NewsContextProps | undefined>(
  undefined
);
