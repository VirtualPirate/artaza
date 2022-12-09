import Link from "next/link";
import styles from "./desk-nav.module.css";

export default function DeskNav() {
  return (
    <nav className={styles.desk_nav}>
      <img src="./graphics/nav.svg" className={styles.nav_svg} alt="" />
      <div className={styles.nav_items_wrapper}>
        <div className={styles.nav_items}>
          <Link href="/" className={styles.nav_item_link}>
            <div className={styles.nav_item}>Home</div>
          </Link>
          <Link href="/skills" className={styles.nav_item_link}>
            <div className={styles.nav_item}>Skills</div>
          </Link>
          <Link href="/projects" className={styles.nav_item_link}>
            <div className={styles.nav_item}>Projects</div>
          </Link>
          <Link href="/blog" className={styles.nav_item_link}>
            <div className={styles.nav_item}>Blog</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
