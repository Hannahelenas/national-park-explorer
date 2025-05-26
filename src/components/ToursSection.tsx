import { useParkTours } from "../hooks/useParkTours";

export const ToursSection = ({ parkCode }: { parkCode: string }) => {
  const { tours, loading, error } = useParkTours(parkCode);

  if (loading) return <p>Loading tours...</p>;
  if (error) return <p>{error}</p>;
  if (tours.length === 0) return <p>No tours available.</p>;

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Tours</h2>
      <ul>
        {tours.map((tour) => (
          <li key={tour.id} className="mb-6">
            <h3 className="text-xl font-semibold">{tour.title}</h3>
            <p>{tour.description}</p>
            <p>
              Duration: {tour.durationMin}–{tour.durationMax}{" "}
              {tour.durationUnit}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
