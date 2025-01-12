import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Header() {
  return (
    <div className={styles["header"]}>
      <img src="Logo.svg" alt="Logo MNTN" />
      <nav>
        <ul>
          <li>
            <a href="#start">Equipment</a>
          </li>
          <li>
            <a href="#start">About us</a>
          </li>
          <li>
            <a href="#start">Blog</a>
          </li>
        </ul>
      </nav>
      <a href="#start">
        <FontAwesomeIcon icon={faUser} />
        Account
      </a>
    </div>
  );
}

export default Header;
