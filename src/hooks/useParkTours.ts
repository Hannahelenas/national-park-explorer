import { useEffect, useState } from "react";
import { Tour } from "../models/tour";
import { fetchParkTours } from "../api/tours";

export const useParkTours = (parkCode?: string) => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!parkCode) return;

    const loadParkTours = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchParkTours(parkCode);
        setTours(data);
      } catch (err) {
        setError("Failed to load tours");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadParkTours();
  }, [parkCode]);

  return { tours, loading, error };
};
