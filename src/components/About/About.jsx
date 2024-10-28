import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/renalImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Fullstack Developer</h3>
              <p>
                Aku seorang fullstack developer dengan pengalaman membangun
                aplikasi website yang responsive dan optimal
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>IT Support</h3>
              <p>
                Aku berpengalaman dalam mengelola infrastruktur IT, troubleshooting
                jaringan, dan memastikan konektivitas yang handal untuk
                mendukung operasional perusahaan.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
