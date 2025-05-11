import { UseNewsContext } from "../hooks/UseNewsContext";

const RecentNewsSection = () => {
  const { news, error, loading } = UseNewsContext();

  if (loading) return <p>Loading latest news...</p>;

  return (
    <section className="px-2 flex flex-col items-center">
      <h2 className="font-bold lg:mt-5 text-amber-950 tracking-widest text-2xl">
        Latest News
      </h2>
      {error && <p>Something went wrong: {error}</p>}
      <section className="flex flex-col gap-5 mt-5">
        {news.map((item) => (
          <article key={item.title} className="border-b p-5 max-w-6xl">
            {item.relatedParks.length > 0 && (
              <p className="uppercase font-bold mb-2">
                {item.relatedParks.map((park) => (
                  <span key={park.parkCode} className="">
                    {park.fullName} ({park.states})
                  </span>
                ))}
              </p>
            )}
            <h3 className="text-2xl mb-5 font-black">{item.title}</h3>
            <div className="flex flex-col md:flex-row lg:flex-row gap-7">
              {item.image?.url && (
                <figure>
                  <img
                    src={item.image.url}
                    alt={item.image.altText}
                    className="aspect-[3/2] sm:w-full md:w-85 lg:w-85 object-cover rounded-xl"
                  />
                </figure>
              )}

              <p className="lg:w-2/4 sm:w-full tracking-wide leading-relaxed font-serif">
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
