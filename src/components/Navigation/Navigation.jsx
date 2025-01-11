import { useState, useEffect, useMemo } from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("#start");

  const sections = useMemo(
    () => ["#start", "#section-1", "#section-2", "#section-3"],
    []
  );
  const sectionNames = useMemo(() => ["Start", "01", "02", "03"], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);
        if (section && scrollPosition >= section.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <div className={styles.sideNav}>
      <div className={styles.progressLine}>
        {sections.map((section, index) => (
          <a
            key={index}
            href={section}
            className={`${styles.navLink} ${
              activeSection === section ? styles.active : ""
            }`}
            onClick={() => setActiveSection(section)}
          >
            <span className={styles.sectionName}>{sectionNames[index]}</span>
          </a>
        ))}
        <div
          className={styles.progressIndicator}
          style={{
            height: `${
              ((sections.indexOf(activeSection) + 1) / sections.length) * 100
            }%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Navigation;
