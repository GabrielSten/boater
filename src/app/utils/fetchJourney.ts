import { resultData } from "../types";

export async function fetchJourney(
  token: string,
  destinationGid: string,
): Promise<resultData | undefined> {
  const baseUrl = "https://ext-api.vasttrafik.se/pr/v4/journeys";

  const params = {
    originName: destinationGid,
    originLatitude: "57.649719",
    originLongitude: "11.795187",
    destinationGid: "9021014005630000",
    limit: "10",
    transportModes: "ferry",
    onlyDirectConnections: "false",
    includeNearbyStopAreas: "false",
    includeOccupancy: "false",
    bodSearch: "false",
  };

  const queryString = new URLSearchParams(params).toString();
  const url = `${baseUrl}?${queryString}`;

  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = response as unknown as resultData;
    return data;
  } catch (error) {
    console.error("Error fetching journeys:", error);
    return undefined;
  }
}
