import styles from "./project.module.css";

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
  return (
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
          {createdUsing.map((skill) => (
            <img
              className={styles.created_using_logo}
              src={`./graphics/skillset/${skill}.svg`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
