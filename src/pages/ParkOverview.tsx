import { useParams } from "react-router-dom";
import { useParkData } from "../hooks/useParkData";
import { getFullStateNames } from "../utils/stateNames";

export const ParkOverview = () => {
  const { parkCode } = useParams<{ parkCode: string }>();
  const { park, loading } = useParkData(parkCode);

  if (loading) return <p>Loadring parkdata...</p>;
  if (!park) return <p>Could not find park</p>;

  return (
    <>
      <section className="relative">
        <img
          src={park.images[0]?.url}
          alt={park.images[0]?.altText}
          className="w-full h-[40dvh] md:h-[90dvh] object-cover"
        />
        <section className="bg-primary relative lg:px-19 sm:px-5 flex justify-between align-center -mt-10 py-4">
          <h1 className="text-2xl sm:text-6xl md:text-5xl font-black text-center text-primary">
            {park.name}
          </h1>
          <div className="flex justify-between items-center gap-4">
            <p className="text-lg font-sans font-bold">{park.designation}</p>
            <p className="text-lg font-sans font-bold">
              {getFullStateNames(park.states).join(", ")}
            </p>
          </div>
        </section>
        <section className="max-w-6xl border-t mx-auto">
          <div className="flex justify-center gap-5 mt-2">
            <p>More info</p>
            <p>Discover news</p>
            <p>More info</p>
          </div>
          <h2 className="font-serif text-5xl mt-5">{park.fullName}</h2>
          <p className="font-serif mt-2">{park.description}</p>
        </section>
      </section>
    </>
  );
};
