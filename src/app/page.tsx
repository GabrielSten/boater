import Trip from "./components/Trip";
import NavBar from "./components/NavBar";
import { getToken } from "./utils/getToken";

console.log(await getToken());

export default function Home() {
  return (
    <div>
      <NavBar />
      <Trip />
    </div>
  );
}
