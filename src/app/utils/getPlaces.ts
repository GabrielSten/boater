import { resultData } from "../types";

export async function getPlaces(token: string): Promise<resultData | void> {
  const url =

  const headers = {
    accept: "text/plain",
    Authorization: `${token}`,
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error("Error fetching journeys:", error);
  }
}
