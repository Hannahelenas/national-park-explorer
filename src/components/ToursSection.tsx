import { useParkTours } from "../hooks/useParkTours";

export const ToursSection = ({ parkCode }: { parkCode: string }) => {
  const { tours, loading, error } = useParkTours(parkCode);

  if (loading) return <p>Loading tours...</p>;
  if (error) return <p>{error}</p>;
  if (tours.length === 0) return <p>No tours available.</p>;

  return (
    <section className=" md:px-20 lg:px-20 xl:px-35 px-5 ">
      <h2 className="text-4xl font-bold mb-10 mt-8">Tours</h2>
      <ul className=" max-w-5xl mx-auto ">
        {tours.map((tour) => (
          <li key={tour.id} className="mb-12 flex gap-8">
            <div className="flex flex-col w-2/3">
              <h3 className="text-2xl font-bold mb-2">{tour.title}</h3>
              <p className="mb-2 font-serif tracking-wide leading-relaxed">
                {tour.description}
              </p>
              <p className="font-serif font-semibold">
                {" "}
                Duration: {tour.durationMin}–{tour.durationMax}{" "}
                {tour.durationUnit}
              </p>
            </div>

            <div className="w-1/3 flex flex-col items-start">
              {tour.images && tour.images.length > 0 && (
                <img
                  src={tour.images[0].url}
                  alt={tour.images[0].altText || tour.title}
                  className="w-full h-50 object-cover rounded-lg mb-2"
                />
              )}
              <p className="font-medium text-gray-700 font-serif">
                Duration: {tour.durationMin}–{tour.durationMax}{" "}
                {tour.durationUnit}
              </p>
            </div>
            {/*  {tour.topics && tour.topics.length > 0 && (
              <p className="mt-2">
                Topics: {tour.topics.map((topic) => topic.name).join(", ")}
              </p>
            )} 

            {/*   {tour.stops && tour.stops.length > 0 && (
              <div>
                <p className="font-semibold">Stops:</p>
                <ul className="list-disc list-inside">
                  {tour.stops.map((stop) => (
                    <li key={stop.id}>{stop.assetName}</li>
                  ))}
                </ul>
              </div>
            )} */}
          </li>
        ))}
      </ul>
    </section>
  );
};
