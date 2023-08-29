/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useRef, useState } from "react";

const MAX_SCROLL_Y = 20000;
const MAX_ZOOM = 10;

export default function Home() {
  const scrollRef = useRef<HTMLElement | null>(null);
  const [y, setY] = useState(0);
  const scale = 1 + (MAX_ZOOM - 1) * (y / MAX_SCROLL_Y);

  const [opacityA, setOpacityA] = React.useState(1);
  const [opacityB, setOpacityB] = React.useState(0);
  // console.log(JSON.stringify({ y, scale, MAX_SCROLL_Y }));
  React.useEffect(() => {
    window.addEventListener("scroll", function (ev) {
      const nextY = this.scrollY;
      setY(nextY);
      const nextOa = Math.max(
        0,
        nextY > 15000 ? (MAX_SCROLL_Y - nextY) / 5000 - 0.15 : 1
      );
      setOpacityA(nextOa);
      setOpacityB(1 - nextOa);
    });
  }, []);

  return (
    <main ref={scrollRef} className={styles.main}>
      <div className={styles.dandan}>
        <img
          className={styles.dandanimg}
          src="dan.png"
          alt="dan dan DAN"
          width={700}
          height={953}
          style={{
            opacity: opacityA,
            transform: `translate(-50%, -50%) scale(${scale}, ${scale})`,
          }}
        />
        <img
          className={styles.dandanimg}
          src="butts.jpg"
          alt="just buts"
          width={1080}
          height={1080}
          style={{
            opacity: opacityB,
            transform: `translate(-40%, -50%) scale(${scale * 0.1}, ${
              scale * 0.1
            })`,
          }}
        />
      </div>
    </main>
  );
}
