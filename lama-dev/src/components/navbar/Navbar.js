"use client";
import Link from "next/link";
import styles from "./page.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Mamamia
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => {
          const { id, title, url } = link;
          return (
            <>
              <div key={id}>
                <Link href={url} className={styles.link}>
                  {title}
                </Link>
              </div>
            </>
          );
        })}
        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
