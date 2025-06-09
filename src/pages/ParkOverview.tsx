import { useParams } from "react-router-dom";
import { useParkData } from "../hooks/useParkData";
import { getFullStateNames } from "../utils/stateNames";
import { ThingsToDoList } from "../components/ThingsToDoList";
import { useThingsToDo } from "../hooks/useThingsToDo";
import { ToursSection } from "../components/ToursSection";

export const ParkOverview = () => {
  const { parkCode } = useParams<{ parkCode: string }>();
  const { park, loading: parkLoading } = useParkData(parkCode);
  const {
    thingsToDo,
    loading: thingsToDoLoading,
    error,
  } = useThingsToDo(parkCode ?? "");

  if (parkLoading) return <p>Loading park data...</p>;
  if (!park) return <p>Could not find park.</p>;

  return (
    <>
      <section className="relative">
        <img
          src={park.images[0]?.url}
          alt={park.images[0]?.altText}
          className="w-full h-[40dvh] md:h-[60dvh] xl:h-[90dvh] object-cover"
        />
        <section
          className="bg-primary relative md:px-20 lg:px-20 xl:px-35 px-5 flex justify-between items-start
        align-center -mt-10 py-4 flex-col md:flex-col md:items-start lg:flex-row lg:items-center "
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-black text-primary">
            {park.name}
          </h1>
          <div
            className="flex lg:flex-row lg:items-center md:flex-row sm:flex-col 
          justify-between gap-5"
          >
            <p className="text-lg font-sans font-bold">{park.designation}</p>
            <p className="text-lg font-sans font-bold">
              {getFullStateNames(park.states).join(", ")}
            </p>
          </div>
        </section>

        <section className="max-w-lg mx-auto px-5 md:px-5 lg:px-5 xl:p-8 bg-primary rounded-2xl flex flex-col justify-center items-start mt-5">
          <div>
            <h3 className="font-bold mb-2">Physical address</h3>
            <ul className="">
              {park.addresses.map((address) => (
                <li key={address.postalCode} className="mb-4">
                  {address.type === "Physical" && (
                    <address className="not-italic font-serif">
                      <p>{address.line1}</p>
                      <p>
                        {address.city}, {address.stateCode} {address.postalCode}
                      </p>
                      <p>{address.countryCode}</p>
                    </address>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Operating hours</h3>
            <ul>
              {park.operatingHours.map((operatingHours) => (
                <li key={operatingHours.name}>
                  {" "}
                  <p className="font-serif"> {operatingHours.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-5 md:px-5 lg:px-5 xl:px-0 mt-10">
          <h2 className="font-serif text-3xl md:text-5xl xl:text-5xl mt-5">
            {park.fullName}
          </h2>
          <div className="flex flex-col md:flex-row lg:flex-row gap-5 mt-5 lg:mt-10 mb-20">
            <div className="flex flex-col">
              <p className="font-serif tracking-wide leading-relaxed">
                {park.description}
              </p>
              {/* <h3 className="mt-4 text-3xl font-serif">Weather and climate</h3>
              <p className="font-serif tracking-wide leading-relaxed mt-4">
                {park.weatherInfo}
              </p> */}
            </div>
            <img
              src={park.images[1]?.url}
              alt={park.images[1]?.altText}
              className="aspect-[3/2] sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 
              object-cover rounded-2xl"
            />
          </div>
        </section>

        {/* Things to do list component */}
        {thingsToDoLoading && (
          <p className="text-center">Loading things to do...</p>
        )}
        {error && <p className="text-center">{error}</p>}
        {!thingsToDoLoading && thingsToDo.length > 0 && (
          <section className="max-w-6xl mx-auto mb-5">
            <ThingsToDoList thingsToDo={thingsToDo} />
          </section>
        )}
        <ToursSection parkCode={park.parkCode} />
      </section>
    </>
  );
};
