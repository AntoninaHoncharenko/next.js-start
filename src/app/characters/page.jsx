import Image from "next/image";
import { fetchCharacters } from "../(services)/api/api";

export default async function Characters() {
  const data = await fetchCharacters();
  const { id, name, image, species, status } = data;

  return (
    <div>
      <h1>Character</h1>
      {data && (
        <div>
          <Image src={image} alt="avatar" width={300} height={300} />
          <p>{name}</p>
          <p>{species}</p>
          <p>{status}</p>
        </div>
      )}
    </div>
  );
}
