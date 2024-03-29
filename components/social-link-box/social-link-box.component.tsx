import Link from "next/link";

import styles from "./social-link-box.module.css";

type SocialLinkBoxProps = {
  href: string;
  src: string;
  name: string;
};

export default function SocialLinkBox({ href, src, name }: SocialLinkBoxProps) {
  return (
    <Link href={href} target="blank_">
      <div className={styles.footer_social}>
        <span className={styles.footer_social_logo_wrapper}>
          <img
            src={src}
            className={styles.footer_social_logo}
            alt="youtube logo"
          />
        </span>
        <span> {name}</span>
      </div>
    </Link>
  );
}
