import { useEffect } from "react";
import IntroductionSectionSvg from "./introduction-section-svg.component";

import styles from "./introduction-section.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

export default function IntroductionSection() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className={styles.introduction_section}>
      <IntroductionSectionSvg></IntroductionSectionSvg>
      <div className={styles.intro_wrapper}>
        <div className={styles.intro_text_wrapper}>
          <p
            className={styles.intro_text}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <span>Hi, I am </span>
            <span className={styles.web_developer_tag}> web developer </span>
            <br />
            <span className={styles.name_tag}>Artaza Sameen</span>
          </p>
        </div>

        <p
          className={styles.intro_content}
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          I am a self taught programmer. Currently a Web Developer as a career
          path. I&apos;ve web development experience of over 1+ Years. And
          programming experience of 5 years. I started at the early age 14.
          Fascinated by computer technology. Since, then I have never stopped
          learning.
        </p>
      </div>
    </section>
  );
}
