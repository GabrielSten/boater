import Trip from "./components/Trip";
import NavBar from "./components/NavBar";
import { fetchToken } from "./utils/fetchToken";
import { fetchJourney } from "./utils/fetchJourney";

export default async function Home() {
  let data;

  try {
    const token = await fetchToken();
    if (token) {
      const result = await fetchJourney(token.access_token, "9021014005630000");
      data = result.json(); // Assuming result is of type ResultData
    }
  } catch (err) {
    console.error("Failed to fetch data", err);
  }

  console.log(await data);

  return (
    <div>
      <NavBar />
      <Trip />
      {data ? (
        <pre>{JSON.stringify(await data)}</pre>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
