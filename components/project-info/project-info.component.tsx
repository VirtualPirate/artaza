import Link from "next/link";

import styles from "./project-info.module.css";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

type ProjectInfoType = {
  image: string;
  name: string;
  description: string;
  visitLink: string;
  codeLink: string;

  visitButtonText?: string;
};

export default function ProjectInfo({
  image,
  name,
  description,
  visitLink,
  codeLink,
  visitButtonText = "VISIT WEBSITE",
}: ProjectInfoType) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className={styles.info}>
      <img
        className={styles.image}
        src={image}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
      />
      <div className={styles.project_info}>
        <div
          className={styles.title}
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          {name}
        </div>
        <p
          className={styles.description}
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {description}
        </p>
        <div className={styles.buttons}>
          <Link href={visitLink} target="blank_">
            <button
              className={styles.visit_button}
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              {visitButtonText}
            </button>
          </Link>

          {codeLink !== "" ? (
            <Link href={visitLink} target="blank_">
              <button className={styles.visit_button}>{visitButtonText}</button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
