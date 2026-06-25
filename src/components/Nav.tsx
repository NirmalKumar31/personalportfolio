"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";
import { person, social } from "@/resources";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/work", label: "projects" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.top}>
        <div className={styles.identity}>
          <p className={styles.name}>
            {person.firstName}
            <span className={styles.nameDot}>.</span>
          </p>
          <div className={styles.statusPill}>
            <span className={styles.greenDot} />
            <span>actively looking</span>
          </div>
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

      <div className={styles.bottom}>
        <p className={styles.location}>Boston, MA</p>
        <div className={styles.socials}>
          {social
            .filter((s) => s.essential && s.link)
            .map((s) => (
              <a
                key={s.name}
                href={s.link}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.name}
              </a>
            ))}
        </div>
      </div>
    </nav>
  );
}
