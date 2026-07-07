import Hero from "@/components/Hero";
import About from "@/components/About";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
    </main>
  );
}
