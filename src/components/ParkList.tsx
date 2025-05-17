import { useParkContext } from "../hooks/useParkContext";

const ParkList = () => {
  const { parks, loading, error } = useParkContext();

  if (loading) return <p>Loading parks...</p>;
  if (error) return <p>Something went wrong: {error}</p>;

  return (
    <section className="mt-20">
      <h1 className="text-3xl sm:text-6xl md:text-6xl font-black text-center">
        Parks
      </h1>
      <ul>
        {parks.map((park) => (
          <li key={park.id}>
            <article>
              <h2 className="text-2xl">{park.fullName}</h2>
              <p>{park.designation}</p>
              {park.getParkHeroImage() && (
                <img
                  src={park.getParkHeroImage()!.url}
                  alt={park.getParkHeroImage()!.altText}
                  className="aspect-[3/2] sm:w-full md:w-85 lg:w-100 object-cover rounded-xl"
                />
              )}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ParkList;
