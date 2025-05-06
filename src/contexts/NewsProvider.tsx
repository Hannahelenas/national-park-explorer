import { useEffect, useState, ReactNode } from "react";
import { NewsArticle } from "../models/NewsArticle";
import { RelatedPark } from "../types/news";
import { NewsContext } from "./NewsContext";

const apiKey = import.meta.env.VITE_NPS_API_KEY;
const apiUrl = import.meta.env.VITE_NPS_NEWS_BASE_URL;

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchNewsReleases = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}?limit=5&api_key=${apiKey}`);
      if (!response.ok) throw new Error("Could not fetch articles");
      const data = await response.json();

      const articles = data.data.map(
        (item: NewsArticle) =>
          new NewsArticle(
            item.title,
            item.abstract,
            item.releaseDate,
            item.relatedParks as RelatedPark[],
            item.parkCode
          )
      );

      setNews(articles);
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsReleases();
  }, []);

  return (
    <NewsContext.Provider
      value={{
        news,
        error,
        loading,
        refetch: fetchNewsReleases,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
