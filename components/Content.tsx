import Link from "next/link";
import styles from "./Content.module.css";
import { GiLightBulb } from "react-icons/gi";
import { BsPersonArmsUp } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";

export default function Content() {
  const year = new Date().getFullYear();
  return (
    <>
      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <div className={styles.wordmark}>Matt Novelli</div>
          <div className={styles.content}>editor, programmer, artist</div>
          {/* <div className={styles.socials}>
            <Link href="https://www.instagram.com/matthewnovelli/">
              <FaInstagram />
            </Link>
            <Link href="https://www.linkedin.com/in/mattnovelli">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/mattnovelli">
              <FaSquareGithub />
            </Link>
            <Link href="https://www.redbubble.com/people/mattnovelli">
              <BiLogoRedbubble />
            </Link>
          </div> */}
        </div>
        <div className={styles.links}>
          <Link className={styles.button} href="/bio">
            <BsPersonArmsUp className={styles.icon} />
            <span>bio</span>
          </Link>
          <Link className={styles.button} href="/projects">
            <GiLightBulb className={styles.icon} />
            <span>projects</span>
          </Link>

          <Link className={styles.button} href="/contact">
            <SiMinutemailer className={styles.icon} />
            <span>contact</span>
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.year}> © {integerToRoman(year)} → ∞</div>
      </footer>
    </>
  );
}
function integerToRoman(num: number) {
  const romanValues: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  for (let key in romanValues) {
    while (num >= romanValues[key]) {
      roman += key;
      num -= romanValues[key];
    }
  }
  return roman;
}
