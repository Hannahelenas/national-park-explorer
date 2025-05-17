import { Park, ParkImage } from "../models/Park";

const apiKey = import.meta.env.VITE_NPS_API_KEY;
const apiUrl = import.meta.env.VITE_NPS_PARKS_BASE_URL;

export async function fetchParks(): Promise<Park[]> {
  const url = new URL(apiUrl);

  // Query-params
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
