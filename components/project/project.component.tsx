import styles from "./project.module.css";
import Link from "next/link";

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
  const link = codeLink === "" ? codeLink : deployLink;

  return (
    <Link href={link}>
      <div className={styles.project}>
        <div className={styles.project_info}>
          <div className={styles.project_name}>{name}</div>
          <div className={styles.project_links}>
            {codeLink !== "" ? (
              <>
                <span className={styles.project_code_link_title}>
                  Code Link:{" "}
                </span>
                <a className={styles.project_code_link} href={codeLink}>
                  {codeLink}
                </a>
              </>
            ) : (
              ""
            )}

            {deployLink !== "" ? (
              <>
                <span className={styles.project_deploy_link_title}>
                  Deploy Link:
                </span>
                <a className={styles.project_deploy_link} href={deployLink}>
                  {deployLink}
                </a>
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
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
