export async function getToken() {
  const headers = "Content-Type: application/x-www-form-urlencoded";
  try {
    const response = fetch("https://ext-api.vasttrafik.se/token", headers);
    return response;
  } catch (error) {
    console.error(error);
  }
}
