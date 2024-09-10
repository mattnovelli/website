import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className={styles.parentContainer}>
      <Header />
      <div className={styles.funkyBackground}></div>
      <main className={styles.main}></main>
    </div>
  );
}
