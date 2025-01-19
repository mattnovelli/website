"use client";
import localFont from "next/font/local";
import styles from "./page.module.css";
import { Dynalight, Karla, Rakkas } from "next/font/google";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import { cookingState, microwaveDisplayState } from "@/state/microwaveState";

const segment = localFont({
  src: "../../fonts/dseg.woff2",
  variable: "--font-segment",
});

const badgeLogoFont = Rakkas({
  subsets: ["latin"],
  weight: "400",
});

const badgeCursiveFont = Dynalight({
  subsets: ["latin"],
  weight: "400",
});

const buttonFont = Karla({
  subsets: ["latin"],
  weight: "700",
});

export default function Page() {
  return (
    <RecoilRoot>
      <Microwave />
    </RecoilRoot>
  );
}

function Microwave() {
  const [displayState, setDisplayState] = useRecoilState(microwaveDisplayState);
  const [cooking, setCooking] = useRecoilState(cookingState);

  const foodRef = useRef<HTMLVideoElement>(null);
  const humAudioRef = useRef<HTMLAudioElement>(null);
  const doneAudioRef = useRef<HTMLAudioElement>(null);

  const windowStyles = clsx([
    {
      [styles.window]: true,
      [styles.cooking]: cooking,
    },
  ]);

  // decrement displayState every second if cooking, stop at 0
  useEffect(() => {
    if (cooking) {
      const interval = setInterval(() => {
        setDisplayState((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            clearInterval(interval); // Clear the interval
            return 0; // Return 0 here without modifying cooking state
          }
        });
      }, 1000);

      // Handle cooking state update separately when the timer reaches 0
      if (displayState === 0 && doneAudioRef.current) {
        setCooking(false);
        doneAudioRef.current.play();
      }

      return () => clearInterval(interval); // Cleanup
    }
  }, [cooking, displayState, setDisplayState, setCooking]);

  // set playback rate to .5 on load
  useEffect(() => {
    if (foodRef.current) {
      foodRef.current.playbackRate = 0.5;
    }
  }, []);

  // adjust playback state based on cookingState
  useEffect(() => {
    if (foodRef.current) {
      if (cooking) {
        foodRef.current.play();
      } else {
        foodRef.current.pause();
      }
    }
  }, [cooking]);

  // adjust playback state based on cookingState
  useEffect(() => {
    if (humAudioRef.current) {
      if (cooking) {
        humAudioRef.current.play();
      } else {
        humAudioRef.current.pause();
      }
    }
  }, [cooking]);

  return (
    <div className={styles.container}>
      <div className={styles.microwaveBody}>
        <div className={styles.door}>
          <div className={windowStyles}>
            <audio
              preload="auto"
              src="/hum.mp3"
              loop={true}
              autoPlay={false}
              ref={humAudioRef}
              controls={false}
            />
            <audio
              preload="auto"
              src="/done.mp3"
              loop={false}
              autoPlay={false}
              ref={doneAudioRef}
              controls={false}
            />
            <video
              preload="auto"
              src="/fries.webm"
              playsInline={true}
              controls={false}
              autoPlay={false}
              loop={true}
              muted={true}
              ref={foodRef}
            />
          </div>
        </div>
        <div className={styles.controlPanel}>
          <div className={`${styles.badge} ${badgeCursiveFont.className}`}>
            <span className={badgeLogoFont.className}>CasualMaleXL</span>
            <br />
            Diner Series
          </div>
          <div className={`${styles.display} ${segment.variable}`}>
            <MicrowaveDisplay number={displayState} />
          </div>
          <MicrowaveButtons />
        </div>
      </div>
    </div>
  );
}

function MicrowaveButtons() {
  return (
    <div className={styles.buttons}>
      <MicrowaveButton label="1" />
      <MicrowaveButton label="2" />
      <MicrowaveButton label="3" />
      <MicrowaveButton label="4" />
      <MicrowaveButton label="5" />
      <MicrowaveButton label="6" />
      <MicrowaveButton label="7" />
      <MicrowaveButton label="8" />
      <MicrowaveButton label="9" />
      <MicrowaveButton label="STOP" isStop />
      <MicrowaveButton label="0" />
      <MicrowaveButton label="START" isStart />
    </div>
  );
}

interface MicrowaveButtonProps {
  label: string;
  isStop?: boolean;
  isStart?: boolean;
}
function MicrowaveButton({ label, isStart, isStop }: MicrowaveButtonProps) {
  const [displayState, setDisplayState] = useRecoilState(microwaveDisplayState);
  const setCooking = useSetRecoilState(cookingState);
  const playBeep = () => {
    const beep = new Audio("/beep.mp3");
    beep.play();
  };

  const onClick = () => {
    playBeep();

    if (isStop) {
      setCooking(false);
      setDisplayState(0);
      return;
    }

    if (isStart) {
      // if (displayState < 1) return;
      if (displayState === 0) {
        setDisplayState(30);
      }
      //start
      setCooking(true);
      return;
    }

    if (displayState.toString().length >= 4) {
      return;
    } else {
      const stringified = displayState.toString();
      const newValue = stringified + label;
      setDisplayState(parseInt(newValue));
    }
  };

  const buttonStyles = clsx([
    styles.button,
    buttonFont.className,
    {
      [styles.textButton]: isStart || isStop,
    },
  ]);

  return (
    <button className={buttonStyles} onClick={onClick}>
      {label}
    </button>
  );
}

interface MicrowaveDisplayProps {
  number: number;
}

function MicrowaveDisplay({ number }: MicrowaveDisplayProps) {
  //pad left with zeros and insert colon
  let text = number.toString();
  text = text.padStart(4, "0");
  text = text.slice(0, 2) + ":" + text.slice(2);

  return <div className={styles.displayText}>{text}</div>;
}
