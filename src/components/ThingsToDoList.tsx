import { ThingToDo } from "../models/thing-to-do";

interface Props {
  thingsToDo: ThingToDo[];
}

export const ThingsToDoList = ({ thingsToDo }: Props) => {
  const shownActivityIds = new Set<string>();

  return (
    <div className="flex flex-col">
      <h2 className="text-4xl text-center font-black mb-6">Things to do</h2>
      <ul className="flex flex-wrap justify-center max-w-6xl gap-15 mx-auto py-10">
        {thingsToDo.map((item) => {
          if (!item.activities) return null;

          const newActivities = item.activities.filter(
            (activity) => !shownActivityIds.has(activity.id)
          );

          if (newActivities.length === 0) return null;

          newActivities.forEach((activity) =>
            shownActivityIds.add(activity.id)
          );

          return (
            <li key={item.id} className="mb-6 flex items-center flex-col">
              {item.images?.[0] && (
                <img
                  src={item.images[0].url}
                  alt={item.images[0].altText || item.title}
                  className="w-60 h-60 mb-2 rounded-full object-cover"
                />
              )}
              <ul>
                {newActivities.map((activity) => (
                  <li key={activity.id}>
                    <p className="font-bold font-serif">{activity.name}</p>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
