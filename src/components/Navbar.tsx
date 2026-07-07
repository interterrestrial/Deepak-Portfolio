import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">DEEPAK</Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#certifications">Certifications</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
