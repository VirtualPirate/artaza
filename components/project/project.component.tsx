import styles from "./project.module.css";
import Link from "next/link";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

type ProjectProps = {
  name: string;
  codeLink: string;
  deployLink: string;
  createdUsing: Array<string>;
};

export default function Project({
  name,
  codeLink,
  deployLink,
  createdUsing,
}: ProjectProps) {
  const link = deployLink !== "" ? deployLink : codeLink;

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className={styles.project} data-aos="zoom-in" data-aos-duration="1000">
      <div className={styles.project_info}>
        <Link href={link} target="blank_">
          <div className={styles.project_name}>{name}</div>
        </Link>
        <div className={styles.project_links}>
          {codeLink !== "" ? (
            <>
              <span className={styles.project_code_link_title}>
                Code Link:{" "}
              </span>
              <Link
                className={styles.project_code_link}
                href={codeLink}
                target="blank_"
              >
                {codeLink}
              </Link>
            </>
          ) : (
            ""
          )}

          {deployLink !== "" ? (
            <>
              <span className={styles.project_deploy_link_title}>
                Deploy Link:
              </span>
              <Link
                className={styles.project_deploy_link}
                href={deployLink}
                target="blank_"
              >
                {deployLink}
              </Link>
            </>
          ) : (
            ""
          )}
        </div>

        <div className={styles.created_using}>
          <span>CREATED USING: </span>
          {createdUsing.map((skill, index) => (
            <img
              className={styles.created_using_logo}
              src={`./graphics/skillset/${skill}.svg`}
              key={index}
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="1000"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
