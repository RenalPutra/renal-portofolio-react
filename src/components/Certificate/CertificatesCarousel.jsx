import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./CertificatesCarousel.module.css";
import { getImageUrl } from "../../utils";

export const CertificatesCarousel = () => {
  // Array of certificates, each with a title, image, and link
  const certificates = [
    {
      title: "Sertifikat PKL IT Support",
      imgSrc: getImageUrl("serti/Raenald-Syaputra-PT-BBE.jpg"),
      link: "https://drive.google.com/file/d/1ITp3XVHtGSp6XgBCmbfbMm7Tyi1cxnHR/view?usp=sharing",
    },
    {
      title: "Sertifikat Web Penetration Testing",
      imgSrc: getImageUrl("serti/bug.jpeg"),
      link: "https://drive.google.com/file/d/1BoLAFerWKuLnfUjeaEYUoj5kd2f8Yob6/view?usp=sharing",
    },
    {
      title: "Sertifikat Fundamental Front-End Web Development",
      imgSrc: getImageUrl("serti/frontend.png"),
      link: "https://drive.google.com/file/d/1apN50b9kemHVvFWzrlUhpuQO6RVczHtV/view?usp=sharing",
    },
    {
      title: "Sertifikat Course Cyber Security",
      imgSrc: getImageUrl("serti/cyber.png"),
      link: "https://drive.google.com/file/d/16cRpQpoFW7Wp6AAnZm3CtuXLXD_3S-bA/view?usp=sharing",
    },
    {
      title: "Piagam Peraih IPK Tertinggi 2020/2021",
      imgSrc: getImageUrl("serti/piagam.png"),
      link: "https://drive.google.com/file/d/1BPm-U6roHBdDP1B5NGMLGEylNDOpu6dP/view?usp=sharing",
    },
    {
      title: "Sertifikat Course Backend Microservice With Python",
      imgSrc: getImageUrl("serti/sanbercode.png"),
      link: "https://drive.google.com/file/d/1ezijpaa91IecF8GIBBnhKcHQLH_FdE-m/view?usp=sharing",
    },
    {
      title: "Haki Aplikasi Web Surat Menyurat Desa Kerta Buana",
      imgSrc: getImageUrl("serti/haki.png"),
      link: "https://drive.google.com/file/d/1L63Eh5hqzL-molKbZujUg_QFuteGYi9k/view?usp=sharing",
    },

    // Add more certificates as needed
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Certificates & Licenses</h2>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}            
        interval={3000}            
        transitionTime={500}        
        className={styles.carousel}
      >
        {certificates.map((cert, index) => (
          <div
            key={index}
            className={styles.slide}
            onClick={() => window.open(cert.link, "_blank")}
          >
            <img src={cert.imgSrc} alt={cert.title} className={styles.image} />
            <p className={styles.caption}>{cert.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
