"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";
import { person } from "@/resources";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/about", label: "about myself" },
  { href: "/hire", label: "hire me" },
  { href: "/work", label: "work & education" },
  { href: "/projects", label: "projects & skills" },
  { href: "/contact", label: "contact me" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.top}>
        <div className={styles.identity}>
          <p className={styles.name}>
            {person.firstName}
          </p>
        </div>

        <ul className={styles.links}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.link} ${
                  pathname === href ? styles.active : ""
                }`}
              >
                <span className={styles.arrow}>→</span>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
}
