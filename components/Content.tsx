import Link from "next/link";
import styles from "./Content.module.css";
import { GiLightBulb } from "react-icons/gi";
import { BsPersonArmsUp } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import Footer from "./Footer";

export default function Content() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.wordmark}>Matt Novelli</div>
          <div className={styles.content}>programmer, editor, artist</div>
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
      <Footer />
    </>
  );
}
