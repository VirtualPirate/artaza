import { useEffect } from "react";
import SpecialitySectionSvg from "./speciality-section-svg.component";

import styles from "./speciality-section.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

export default function SpecialitySection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.speciality_section}>
      <div className={styles.service_intro_content_text}>
        <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          RESPONSIVE & ANIMATIONS
        </h2>
        <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
          Not only do I create websites but websites which looks excellent in
          various devices and with professional looking
          <span> Animations</span> and <span>Responsiveness</span> . Creating
          professional level front designs to extensive backend developement,
          using <span>REST</span>, <span>GraphQL</span> and <span>SQL</span>.
        </p>
      </div>
      <SpecialitySectionSvg></SpecialitySectionSvg>
    </section>
  );
}
