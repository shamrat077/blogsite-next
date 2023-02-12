import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles["nav-list"]}>
        <li className={navStyles["nav-list__item"]}>
          <Link className={navStyles["nav-list__link"]} href="/">
            Home
          </Link>
        </li>

        <li className={navStyles["nav-list__item"]}>
          <Link className={navStyles["nav-list__link"]} href="/blogs">
            Blogs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
