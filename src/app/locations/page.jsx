import { fetchLocations } from "../../services/api/api";
import css from "./locations.module.css";

export default async function Locations() {
  const data = await fetchLocations();

  return (
    <>
      <h1 className={css.mainTitle}>Locations</h1>
      <p>{data.name}</p>
      <p>{data.type}</p>
    </>
  );
}
