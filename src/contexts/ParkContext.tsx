import { createContext } from "react";
import { Park } from "../models/Park";

export interface ParkContextProps {
  parks: Park[];
  error: string | null;
  loading: boolean;
  refetch: () => Promise<void>;
}

export const ParkContext = createContext<ParkContextProps | undefined>(
  undefined
);
