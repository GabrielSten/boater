import { Token } from "../types";

export async function fetchToken() {
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: process.env.CLIENT_ID as string,
    client_secret: process.env.CLIENT_SECRET as string,
  });

  try {
    const response = await fetch("https://ext-api.vasttrafik.se/token", {
      method: "POST",
      headers: headers,
      body: body,
    });

    if (!response) {
      throw new Error(`HTTP error! status: ${response}`);
    }

    const data = (await response.json()) as Token;
    return data;
  } catch (error) {
    console.error("Error fetching token:", error);
  }
}
