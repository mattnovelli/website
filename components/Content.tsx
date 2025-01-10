import Link from "next/link";
import styles from "./Content.module.css";
import { GiLightBulb } from "react-icons/gi";
import { BsPersonArmsUp } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import Footer from "./Footer";
import localFont from "next/font/local";

const Bagnard = localFont({
  src: "../app/fonts/PicNic.woff2",
  variable: "--font-bagnard",
});

export default function Content() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.wordmarkBorder}>
          <div className={`${styles.wordmark} ${Bagnard.className}`}>
            <b> matt novelli</b>
          </div>
        </div>
        {/* <div className={styles.content}>programmer, editor, artist</div> */}
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
      <span className={styles.accent}>↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯</span>
      <main className={styles.main}>
        <div className={styles.links}>
          <Link className={styles.button} href="/bio">
            <BsPersonArmsUp className={styles.icon} />
            <span>about</span>
          </Link>
          <Link className={styles.button} href="/projects">
            <GiLightBulb className={styles.icon} />
            <span>works</span>
          </Link>

          <Link className={styles.button} href="/contact">
            <SiMinutemailer className={styles.icon} />
            <span>mails</span>
          </Link>
        </div>
      </main>
      <span className={styles.accentBottom}>
        ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
      </span>
      <Footer />
    </>
  );
}
