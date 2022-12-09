import { useEffect, useRef } from "react";

import { AnyARecord } from "dns";
import styles from "./skill-box.module.css";

export type SkillBoxProps = {
  name: string;
  logo: string;
  skillLevel: 1 | 2 | 3 | 4;
  delay: number;
};

export default function SkillBox({
  name,
  logo,
  skillLevel,
  delay,
}: SkillBoxProps) {
  const skillRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef(null);
  const skillBarRef = useRef(null);

  const animationDelay = { animationDelay: `${delay}ms` };
  const animationDelayChild = { animationDelay: `${500 + delay}ms` };

  return (
    <div ref={skillRef} className={styles.skill} style={animationDelay}>
      <img
        ref={logoRef}
        src={logo}
        className={styles.skill_logo}
        alt="html logo"
        style={animationDelayChild}
      />
      <div className={styles.skill_stat}>
        <span className={styles.skill_name}>{name}</span>
        <div className={styles.skill_level}>
          <span>Skill:</span>
          <div className={styles.skill_bar}>
            <div
              ref={skillBarRef}
              className={`${styles.skill_meter} ${
                styles[`skill_meter_${skillLevel}`]
              }`}
              style={animationDelayChild}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
