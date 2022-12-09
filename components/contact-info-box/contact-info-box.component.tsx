import styles from "./contact-info-box.module.css";

type ContactInfoBoxProps = {
  phone: string;
  email: string;
};

export default function ContactInfoBox({ phone, email }: ContactInfoBoxProps) {
  return (
    <div className={styles.footer_contact_wrapper}>
      <div
        className={`${styles.footer_contact} ${styles.footer_contact_phone}`}
      >
        <img
          src="./graphics/contacts/phone-solid.svg"
          className={styles.footer_contact_logo}
          alt="phone logo"
        />
        <span> {phone} </span>
      </div>

      <div
        className={`${styles.footer_contact} ${styles.footer_contact_email}`}
      >
        <img
          src="./graphics/contacts/envelope-solid.svg"
          className={styles.footer_contact_logo}
          alt="email logo"
        />
        <span> {email} </span>
      </div>
    </div>
  );
}
