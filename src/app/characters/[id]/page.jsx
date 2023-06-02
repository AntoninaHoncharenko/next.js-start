import Link from "next/link";
import Image from "next/image";
import { fetchOneCharacter } from "@/services/api/api";
import css from "./page.module.css";

export default async function Character({ params: { id } }) {
  const data = await fetchOneCharacter(id);

  return (
    <>
      <Link href="/characters" className={css.backLink}>
        Back
      </Link>
      <div className={css.char}>
        <Image
          src={data.image}
          alt="avatar"
          width={300}
          height={300}
          className={css.image}
        />
        <ul className={css.infoWrap}>
          <li className={css.title}>{data.name}</li>
          <li className={css.info}>{data.species}</li>
          <li className={css.info}>{data.status}</li>
        </ul>
      </div>
    </>
  );
}
