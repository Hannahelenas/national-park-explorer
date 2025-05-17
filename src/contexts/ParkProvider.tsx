import { useEffect, useState, ReactNode } from "react";
import { Park } from "../models/Park";
import { ParkContext } from "./ParkContext";
import { fetchParks } from "../api/parks";

export const ParkProvider = ({ children }: { children: ReactNode }) => {
  const [parks, setParks] = useState<Park[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const loadParks = async () => {
    setLoading(true);
    try {
      const data = await fetchParks();
      setParks(data);
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadParks();
  }, []);

  return (
    <ParkContext.Provider
      value={{
        parks,
        error,
        loading,
        refetch: loadParks,
      }}
    >
      {children}
    </ParkContext.Provider>
  );
};
