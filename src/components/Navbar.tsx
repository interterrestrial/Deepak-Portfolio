"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">DEEPAK</Link>
      </div>

      <button className={styles.burgerBtn} onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X size={24} color="#FFF" /> : <Menu size={24} color="#FFF" />}
      </button>

      <div className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="#skills" onClick={() => setIsOpen(false)}>Skills</Link>
        <Link href="#experience" onClick={() => setIsOpen(false)}>Experience</Link>
        <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link href="#certifications" onClick={() => setIsOpen(false)}>Certifications</Link>
        <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}
