"use client";
import { Courgette } from "next/font/google";

import styles from "./styles.module.scss";
const courgette = Courgette({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
export default function AnimatedLogo({
  width = "120px",
  height = "120px",
  fixedText = "dk",

  fixedTextSize = "24px",
  circularText = "development",
  cercleTextSize = "18px",
}) {
  const letters = circularText.split("");
  const angle = 360 / letters.length;
  return (
    <div className={styles.conteneur} style={{ width, height }}>
      <div
        className={`${courgette.className}  ${styles.texteFixe}`}
        style={{ fontSize: fixedTextSize }}
      >
        {fixedText}
      </div>
      <div className={styles.cercleTexte}>
        {letters.map((letter, index) => (
          <span
            key={index}
            className={`${courgette.className}  ${styles.letter}`}
            style={{
              transform: `rotate(${angle * index}deg)`,
              fontSize: cercleTextSize,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}
