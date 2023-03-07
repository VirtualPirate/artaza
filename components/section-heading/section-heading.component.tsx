import styles from "./section-heading.module.css";

type SectionHeadingType = {
  name: string;
};

export default function SectionHeading({ name }: SectionHeadingType) {
  return <h1 className={styles.heading}>{name}</h1>;
}
