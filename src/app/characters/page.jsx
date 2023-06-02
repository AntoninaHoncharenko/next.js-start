import Image from "next/image";
import Link from "next/link";
import { fetchCharacters } from "../../services/api/api";
import css from "./characters.module.css";

export default async function Characters() {
  const data = await fetchCharacters();

  return (
    <div>
      <h1 className={css.mainTitle}>Characters</h1>
      {data && (
        <ul className={css.list}>
          {data.map((item) => (
            <li key={item.id} className={css.item}>
              <Link href={`/characters/${item.id}`}>
                <Image
                  src={item.image}
                  alt="avatar"
                  width={300}
                  height={300}
                  className={css.image}
                />
                <ul className={css.infoWrap}>
                  <li className={css.title}>{item.name}</li>
                  <li className={css.info}>{item.species}</li>
                  <li className={css.info}>{item.status}</li>
                </ul>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
