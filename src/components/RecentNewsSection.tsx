import { UseNewsContext } from "../hooks/UseNewsContext";

const RecentNewsSection = () => {
  const { news, error, loading } = UseNewsContext();

  if (loading) return <p>Loading latest news...</p>;

  return (
    <section>
      <h2 className="lg:mt-5 font-bold text-amber-950 tracking-widest text-2xl">
        LATEST NEWS
      </h2>
      {error && <p>Something went wrong: {error}</p>}
      <section className="flex flex-col gap-5 mt-5">
        {news.map((item) => (
          <article key={item.title} className="">
            <h3 className="text-2xl">{item.title}</h3>
            <p>{item.abstract}</p>
            <p>Release date: {item.getFormattedDate()}</p>
            {item.image?.url && (
              <figure>
                <img
                  src={item.image.url}
                  alt={item.image.altText}
                  className="aspect-square object-cover h-60"
                />
              </figure>
            )}
            {item.relatedParks.length > 0 && (
              <p>
                {item.relatedParks.map((park) => (
                  <span key={park.parkCode}>
                    {park.fullName} ({park.states})
                  </span>
                ))}
              </p>
            )}
          </article>
        ))}
      </section>
    </section>
  );
};

export default RecentNewsSection;
