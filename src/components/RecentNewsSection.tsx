import { UseNewsContext } from "../hooks/UseNewsContext";

const RecentNewsSection = () => {
  const { news, error, loading } = UseNewsContext();

  if (loading) return <p>Loading latest news...</p>;

  return (
    <section className="px-10">
      <h2 className="lg:mt-5 font-bold text-amber-950 tracking-widest text-2xl">
        LATEST NEWS
      </h2>
      {error && <p>Something went wrong: {error}</p>}
      <section className="flex flex-col gap-5 mt-5">
        {news.map((item) => (
          <article
            key={item.title}
            className="border-b-2 border-gray-300 p-5  max-w-5xl"
          >
            {item.relatedParks.length > 0 && (
              <p className="uppercase font-extrabold mb-2">
                {item.relatedParks.map((park) => (
                  <span key={park.parkCode} className="font-black">
                    {park.fullName} ({park.states})
                  </span>
                ))}
              </p>
            )}
            <h3 className="text-2xl font-extrabold mb-5">{item.title}</h3>
            <div className="flex flex-row gap-7">
              {item.image?.url && (
                <figure>
                  <img
                    src={item.image.url}
                    alt={item.image.altText}
                    className="aspect-[3/2] w-90 object-cover rounded-xl"
                  />
                </figure>
              )}
              <p className="w-2/4 tracking-wide leading-relaxed">
                {item.abstract}
              </p>
            </div>
            <div className="flex flex-row gap-2 mt-5 items-center justify-end">
              <p className="font-serif">
                Release date: {item.getFormattedDate()}
              </p>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default RecentNewsSection;
