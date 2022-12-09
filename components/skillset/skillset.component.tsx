import SkillBox from "../skill-box/skill-box.component";

import skills from "../../models/skillset.model";

import styles from "./skillset.module.css";
import { useRef } from "react";

// const animationFrames = [
//   { opacity: "0", transform: "translateY(6vw)" },
//   { opacity: "1", transform: "translateY(0)" },
// ];

const animationFrames = [
  { opacity: "1", transform: "" },
  { opacity: "1", transform: "rotate(360deg)" },
];

const animation = {
  duration: 5000,
  iterations: Infinity,
  fill: "forwards",
  easing: "cubic-bezier(.8,.62,.85,1.34)",
};

export default function Skillset() {
  let delay = -50;

  return (
    <section className={styles.skillset}>
      <h1 className={styles.skillset_heading}>SKILLS</h1>
      <div className={styles.skillset_content_wrapper}>
        <div className={styles.skillset_content}>
          {skills.map((skill) => {
            delay += 50;
            return (
              <SkillBox
                key={skill.name}
                name={skill.name}
                logo={`./graphics/skillset/${skill.logo}`}
                skillLevel={skill.skillLevel}
                delay={delay}
              ></SkillBox>
            );
          })}
        </div>
      </div>
    </section>
  );
}
