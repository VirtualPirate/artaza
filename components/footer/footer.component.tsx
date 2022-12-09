import SocialLinkBox from "../social-link-box/social-link-box.component";
import ContactInfoBox from "../contact-info-box/contact-info-box.component";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_contacts}>
        <div
          className={`${styles.footer_heading} ${styles.footer_contact_heading}`}
        >
          CONTACT INFO
        </div>
        <ContactInfoBox
          phone="+917630033481"
          email="artaza.developer@gmail.com"
        ></ContactInfoBox>
      </div>

      <div className={styles.footer_socials}>
        <div
          className={`${styles.footer_heading} ${styles.footer_social_heading}`}
        >
          SOCIAL
        </div>

        <div className={styles.footer_socials_wrapper}>
          <SocialLinkBox
            href="https://www.youtube.com/channel/UCjJ2s-HggyLOY_3Ds9bDLlQ"
            src="./graphics/contacts/youtube.svg"
            name="Youtube"
          ></SocialLinkBox>
          <SocialLinkBox
            href="https://www.linkedin.com/in/artaza-sameen-4b995b23a/"
            src="./graphics/contacts/linkedin.svg"
            name="Linkedin"
          ></SocialLinkBox>
          <SocialLinkBox
            href="https://github.com/VirtualPirate"
            src="./graphics/contacts/github.svg"
            name="GitHub"
          ></SocialLinkBox>
          <SocialLinkBox
            href="https://www.instagram.com/artazasameen/"
            src="./graphics/contacts/instagram.svg"
            name="Instagram"
          ></SocialLinkBox>
        </div>
      </div>
    </footer>
  );
}
