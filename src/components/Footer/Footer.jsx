import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles["footer"]}>
      <div>
        <img src="Logo.svg" alt="Logo MNTN" />
        <h2>
          Get out there & discover your next slope, mountain & destination!
        </h2>
        <p>Copyright MNTN, Inc. Terms & Privacy</p>
      </div>

      <div>
        <h3>About MNTN</h3>
        <a href="#start">Contribution & Writers</a>
        <a href="#start">Write For Us</a>
        <a href="#start">Contact Us</a>
        <a href="#start">Privacy Police</a>
      </div>

      <div>
        <h3>More on MNTN</h3>
        <a href="#start">The Team</a>
        <a href="#start">Jobs</a>
        <a href="#start">Press </a>
      </div>
    </div>
  );
}

export default Footer;
