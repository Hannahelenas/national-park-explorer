/* import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_NPS_API_KEY;
const apiUrl = import.meta.env.VITE_NPS_NEWS_BASE_URL;

interface NewsArticle {
  title: string;
  abstract: string;
  releaseDate: string;
  relatedParks: Array<RelatedPark>;
  parkCode: string;
}

interface RelatedPark {
  designation: string;
  fullName: string;
  name: string;
  parkCode: string;
  states: string;
  url: string;
}

const RecentNewsSection = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchNewsReleases = async () => {
    try {
      const response = await fetch(`${apiUrl}?limit=5&api_key=${apiKey}`);
      if (!response.ok) throw new Error("Could not fetch articles");
      const data = await response.json();
      setNews(data.data);
      console.log(data.data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNewsReleases();
  }, []);

  return (
    <section>
      <h2>LATEST NEWS</h2>
      {error && <p>Something went wrong:{error}</p>}
      <ul>
        {news.map((item) => (
          <li key={item.title}>
            <h3 className="text-2xl">{item.title}</h3>
            <p>{item.abstract}</p>
            <p>{item.releaseDate}</p>
            {item.relatedParks.length > 0 && (
              <p>
                Related Parks: 
                {item.relatedParks.map((park) => (
                  <span key={park.parkCode}>
                    {park.fullName} ({park.states})
                  </span>
                ))}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentNewsSection; */

import { useNews } from "../contexts/NewsContext";

const RecentNewsSection = () => {
  const { news, error, loading } = useNews();

  if (loading) return <p>Loading latest news...</p>;

  return (
    <section>
      <h2>LATEST NEWS</h2>
      {error && <p>Something went wrong: {error}</p>}
      <ul>
        {news.map((item) => (
          <li key={item.title}>
            <h3 className="text-2xl">{item.title}</h3>
            <p>{item.abstract}</p>
            <p>{item.getFormattedDate()}</p> {/* Använder metod i modellen */}
            {item.relatedParks.length > 0 && (
              <p>
                Related Parks:{" "}
                {item.relatedParks.map((park) => (
                  <span key={park.parkCode}>
                    {park.fullName} ({park.states})
                  </span>
                ))}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentNewsSection;
