import { useSwipeable } from "react-swipeable";
import { useRef, useState } from "react";
import Link from "next/link";

import styles from "./mobile-nav.module.css";

export default function MobileNav() {
  const [sideNavState, setSideNavState] = useState<boolean>(false);
  const sideNavRef = useRef<HTMLDivElement>(null);

  function toggleSideNavState() {
    setSideNavState(!sideNavState);
  }

  const swipeHandler = useSwipeable({
    onSwipedLeft: (e) => toggleSideNavState(),
  });

  return (
    <>
      <div className={styles.header_navigation}>
        <div className={styles.header_navigation_bar_mobile}></div>
        <img
          src="./graphics/wavy.svg"
          alt=""
          className="header-navigation-img-mobile"
        />
        <button onClick={toggleSideNavState}>
          <img
            src="./graphics/bars-solid.svg"
            className={styles.header_navigation_bar}
            alt=""
          />
        </button>
      </div>

      <nav
        className={`${styles.side_nav} ${sideNavState ? styles.show : ""}`}
        {...swipeHandler}
      >
        <div className={styles.side_nav_sticky}>
          <button onClick={toggleSideNavState}>
            <img
              src="./graphics/xmark-solid.svg"
              alt="cross mark"
              className={styles.close_side_nav_btn}
            />
          </button>
          <img
            src="./graphics/side-nav-bg.svg"
            className={styles.side_nav_bg}
            alt=""
          />
          <ul className={styles.side_nav_items}>
            <Link
              href="/"
              style={{ color: "black" }}
              onClick={toggleSideNavState}
            >
              <li>Home</li>
            </Link>
            <Link
              href="/skills"
              style={{ color: "black" }}
              onClick={toggleSideNavState}
            >
              <li>Skills</li>
            </Link>
            <Link
              href="/projects"
              style={{ color: "black" }}
              onClick={toggleSideNavState}
            >
              <li>Projects</li>
            </Link>
            <Link
              href="/blog"
              style={{ color: "black" }}
              onClick={toggleSideNavState}
            >
              <li>Blog</li>
            </Link>
            <li>More Info</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
