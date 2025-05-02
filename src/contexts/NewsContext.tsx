import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { NewsArticle } from "../models/NewsArticle"; // Din klassmodell
import { RelatedPark } from "../types/news"; // Typen för RelatedPark

const apiKey = import.meta.env.VITE_NPS_API_KEY;
const apiUrl = import.meta.env.VITE_NPS_NEWS_BASE_URL;

interface NewsContextProps {
  news: NewsArticle[];
  error: string | null;
  loading: boolean;
  refetch: () => Promise<void>;
}

// Skapa context
const NewsContext = createContext<NewsContextProps | undefined>(undefined);

// Provider-komponent
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

      // Konvertera data till NewsArticle-objekt:
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

  // Hämta data direkt när komponenten mountas
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

// Custom hook för att enkelt hämta context
export const useNews = (): NewsContextProps => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return context;
};
