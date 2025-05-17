import { useContext } from "react";
import { ParkContext } from "../contexts/ParkContext";

export const useParkContext = () => {
  const context = useContext(ParkContext);
  if (!context) {
    throw new Error("useNpsData måste användas inom en NpsDataProvider");
  }
  return context;
};
