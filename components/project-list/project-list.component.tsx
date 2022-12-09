import Project from "../project/project.component";

import projects from "../../models/projects.model";

import styles from "./project-list.module.css";

export default function ProjectList() {
  return (
    <section className={styles.projects}>
      <h1 className={styles.projects_heading}>PROJECTS</h1>
      <div className={styles.projects_content_wrapper}>
        <div className={styles.projects_content}>
          {projects.map((project) => (
            <Project {...project}></Project>
          ))}
        </div>
      </div>
    </section>
  );
}
