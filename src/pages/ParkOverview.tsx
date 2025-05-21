import { useParams } from "react-router-dom";
import { useParkData } from "../hooks/useParkData";

export const ParkOverview = () => {
  const { parkCode } = useParams<{ parkCode: string }>();
  const { park, loading } = useParkData(parkCode);

  if (loading) return <p>Loadring parkdata...</p>;
  if (!park) return <p>Could not find park</p>;

  return (
    <section className="relative">
      <img
        src={park.images[0]?.url}
        alt={park.images[0]?.altText}
        className="w-full h-[40dvh] md:h-[90dvh] object-cover"
      />
      <section
        className="bg-primary relative z-10 -mt-20 p-6 rounded-3xl  sm:-mt-20 sm:p-10 max-w-7xl mx-auto 
      flex justify-between items-center"
      >
        <h1 className="text-3xl sm:text-6xl md:text-6xl font-black text-center text-primary">
          {park.name}
        </h1>
        <p className="text-lg mt-2 font-serif">{park.designation}</p>
        <p className="font-serif">{park.states}</p>
      </section>
    </section>
  );
};
