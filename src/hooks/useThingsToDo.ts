import { useEffect, useState } from "react";
import { ThingToDo } from "../models/thing-to-do";
import { fetchThingsToDo } from "../api/thingsToDo";

export function useThingsToDo(parkCode: string) {
  const [thingsToDo, setThingsToDo] = useState<ThingToDo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!parkCode) return; // Undvik onödig fetch om parkCode är tom

    setLoading(true);
    setError(null);

    async function loadData() {
      try {
        const data = await fetchThingsToDo(parkCode);
        setThingsToDo(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [parkCode]);

  return { thingsToDo, loading, error };
}
