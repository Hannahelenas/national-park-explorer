import { useContext } from "react";
import { NewsContext } from "../contexts/NewsContext";

export const UseNewsContext = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNewsContext must be used within a NewsProvider");
  }
  return context;
};
