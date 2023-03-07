import ProjectInfo from "../project-info/project-info.component";
import projects from "../../models/project-info.model";
import styles from "./project-info-list.module.css";

import Link from "next/link";

export default function ProjectInfoList() {
  return (
    <section className={styles.projects}>
      <div className={styles.projects_content_wrapper}>
        <div className={styles.projects_content}>
          {projects.map((project, index) => (
            <ProjectInfo {...project} key={index}></ProjectInfo>
          ))}

          <Link href="/projects" className={styles.show_projects}>
            Show More Projects {">"}
          </Link>
        </div>
      </div>
    </section>
  );
}
