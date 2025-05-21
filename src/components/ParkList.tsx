import { Link } from "react-router";
import { useParkContext } from "../hooks/useParkContext";

const ParkList = () => {
  const { parks, loading, error } = useParkContext();

  if (loading) return <p>Loading parks...</p>;
  if (error) return <p>Something went wrong: {error}</p>;

  return (
    <section className="mt-20 bg-primary flex flex-col items-center">
      <h1 className="text-3xl sm:text-6xl md:text-6xl font-black text-center pt-10 mb-10 text-primary">
        Parks
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-1 max-w-6xl mx-auto">
        {parks.map((park) => (
          <li key={park.id}>
            <Link
              to={`/parks/${park.parkCode}`}
              aria-label={`Go to the page for ${park.name}`}
            >
              <article
                className="flex flex-col p-6 hover:scale-105 transition-transform duration-300
                 ease-in-out hover:cursor-pointer hover:underline hover:decoration-[var(--color-text-primary)]
                  text-primary rounded-xl"
              >
                {park.getParkHeroImage() && (
                  <img
                    src={park.getParkHeroImage()!.url}
                    alt={park.getParkHeroImage()!.altText}
                    className="aspect-[3/2] w-full object-cover rounded-xl"
                    loading="lazy"
                  />
                )}
                <h3 className="text-3xl mb-2 font-black mt-2">{park.name}</h3>
                <p className="tracking-wide leading-relaxed font-serif">
                  {park.designation}
                </p>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ParkList;
