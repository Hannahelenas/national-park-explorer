import { useEffect, useState } from "react";
import { Park } from "../models/Park";
import { useParkContext } from "./useParkContext";

export const useParkData = (parkCode?: string) => {
  const { getParkByCode } = useParkContext();
  const [park, setPark] = useState<Park | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!parkCode) return;

    const loadPark = async () => {
      setLoading(true);
      const data = await getParkByCode(parkCode);
      setPark(data);
      setLoading(false);
    };

    loadPark();
  }, [parkCode, getParkByCode]);

  return { park, loading };
};
