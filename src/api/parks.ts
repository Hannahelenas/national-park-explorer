import { Park, ParkImage } from "../models/Park";

const apiKey = import.meta.env.VITE_NPS_API_KEY;
const apiUrl = import.meta.env.VITE_NPS_PARKS_BASE_URL;

// Fetch list of parks from the nps api
export async function fetchParks(): Promise<Park[]> {
  const url = new URL(apiUrl);

  // Query-params for url
  url.searchParams.set("limit", "20");
  url.searchParams.set("api_key", apiKey);

  console.log(url.toString());

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("Could not fetch parks");
  }

  const data = await response.json();

  const parks = data.data.map((item: Park) => {
    return new Park(
      item.id,
      item.fullName,
      item.parkCode,
      item.description,
      item.states,
      item.directionsInfo,
      item.images as ParkImage[],
      item.weatherInfo,
      item.name,
      item.designation
    );
  });

  return parks;
}

// Fetch a single park by parkCode
export async function fetchPark(parkCode: string): Promise<Park> {
  const url = new URL(apiUrl);
  url.searchParams.set("parkCode", parkCode);
  url.searchParams.set("api_key", apiKey);

  const response = await fetch(url.toString());
  if (!response.ok)
    throw new Error(`Could not fetch park with code ${parkCode}`);

  const data = await response.json();

  const item = data.data[0];
  if (!item) throw new Error(`Park not found for code ${parkCode}`);

  return new Park(
    item.id,
    item.fullName,
    item.parkCode,
    item.description,
    item.states,
    item.directionsInfo,
    item.images as ParkImage[],
    item.weatherInfo,
    item.name,
    item.designation
  );
}
