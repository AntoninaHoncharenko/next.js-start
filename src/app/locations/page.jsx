import { fetchLocations } from "../(services)/api/api";

export default async function Locations() {
  const data = await fetchLocations();

  return (
    <div>
      <h1>Locations</h1>
      <p>{data.name}</p>
      <p>{data.type}</p>
    </div>
  );
}
