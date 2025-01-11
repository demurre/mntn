import styles from "./Social.module.css";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Social() {
  return (
    <div className={styles["social-container"]}>
      <p className={styles["vertical-text"]}>Follow us</p>
      <a href="https://www.instagram.com/">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://twitter.com">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  );
}

export default Social;
