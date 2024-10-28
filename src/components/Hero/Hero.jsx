import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Namaku Raenald Syaputra</h1>
        <p className={styles.description}>
          Lulusan IT dengan keahlian develop aplikasi web dan pengalaman IT Support. Siap membantu solusi digital Anda!
          Klik tombol di bawah untuk menghubungi saya!
        </p>
        <a href="mailto:raenaldsyaputra57@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/renal.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
