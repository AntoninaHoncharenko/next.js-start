import Link from "next/link";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link href="/" className={css.navLink}>
          Home
        </Link>
        <Link href="/characters" className={css.navLink}>
          Characters
        </Link>
        <Link href="/locations" className={css.navLink}>
          Locations
        </Link>
      </nav>
    </header>
  );
};
