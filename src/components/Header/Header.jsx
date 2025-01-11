import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles["header"]}>
      <img src="Logo.svg" alt="Logo MNTN" />
      <nav>
        <ul>
          <li>
            <a href="equipment">Equipment</a>
          </li>
          <li>
            <a href="about">About us</a>
          </li>
          <li>
            <a href="blog">Blog</a>
          </li>
        </ul>
      </nav>
      <p>Account</p>
    </div>
  );
}

export default Header;
