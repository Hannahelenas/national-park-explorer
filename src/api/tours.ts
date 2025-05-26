import { Tour } from "../models/tour";

export async function fetchParkTours(parkCode: string): Promise<Tour[]> {
  const url = new URL(import.meta.env.VITE_NPS_TOURS_BASE_URL);
  url.searchParams.set("limit", "10");
  url.searchParams.set("api_key", import.meta.env.VITE_NPS_API_KEY);
  url.searchParams.set("parkCode", parkCode);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("Could not fetch park tours");
  }

  const data = await response.json();

  // Tour är nu ett vanligt object, ingen instansiering krävs
  return data.data as Tour[];
}
