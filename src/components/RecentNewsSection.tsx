import { UseNewsContext } from "../hooks/UseNewsContext";

const RecentNewsSection = () => {
  const { news, error, loading } = UseNewsContext();

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
            <p>{item.getFormattedDate()}</p>
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
