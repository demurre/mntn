import styles from "./Main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faMinus } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../assets/data";
import ContentSection from "../../components/ContentSection/ContentSection";

function Hero() {
  return (
    <div className={styles["main"]}>
      <div id="start" className={styles["main-content"]}>
        <p>
          <FontAwesomeIcon icon={faMinus} /> A HIKING GUIDE
        </p>
        <h1>
          Be Prepared For The <br />
          Mountains And Beyond!
        </h1>
        <a href={`#section-1`}>
          scroll down <FontAwesomeIcon icon={faArrowDown} />
        </a>
      </div>

      {data.map((item, index) => (
        <ContentSection key={index} data={item} id={`section-${index + 1}`} />
      ))}
    </div>
  );
}

export default Hero;
