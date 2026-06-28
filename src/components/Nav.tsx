"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";
import { person } from "@/resources";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Myself" },
  { href: "/hire", label: "Hire Me" },
  { href: "/work", label: "Work & Education" },
  { href: "/projects", label: "Projects & Skills" },
  { href: "/contact", label: "Contact Me" },
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
