import styles from "./ContentSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function ContentSection({ data, id }) {
  // Extract the section number from the id (e.g., "section-1" -> "01")
  const sectionNumber = id.match(/(\d+)/)[0]; // Extracts the number from the id (e.g., "1")
  const formattedCount = sectionNumber.padStart(2, "0"); // Adds a leading zero if needed

  return (
    <div
      id={id}
      className={`${styles["content-section"]} ${
        data.textAlign === "right" ? styles["reverse"] : ""
      }`}
    >
      <div className={styles["text-content"]}>
        <div className={styles["count"]}>{formattedCount}</div>
        <p>
          <FontAwesomeIcon icon={faMinus} /> {data.title}
        </p>
        <h1>{data.heading}</h1>
        <h2>{data.description}</h2>
        <a href={data.linkHref}>
          read more <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>

      <img
        src={data.imageSrc}
        alt={data.imageAlt}
        className={styles["image"]}
      />
    </div>
  );
}

export default ContentSection;
