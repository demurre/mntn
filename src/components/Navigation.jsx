import { useMemo, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import styled from "styled-components";

const SideNav = styled.nav`
  position: fixed;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProgressLine = styled.div`
  position: relative;
  width: 2px;
  background-color: var(--hover-color);
  height: 160px;
`;

const ProgressIndicator = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  background-color: var(--primary-text-color);
`;

const NavLink = styled(motion.a)`
  text-decoration: none;
  display: flex;
  align-items: center;
  transform: translateY(-50%);
  position: absolute;

  span {
    margin-left: 10px;
    font-size: var(--font-size-s);
    color: ${({ $active }) =>
      $active ? "var(--primary-text-color)" : "var(--hover-color)"};
  }

  &:hover span {
    color: var(--primary-text-color);
  }
`;

const Navigation = () => {
  const sections = useMemo(
    () => ["#start", "#section-1", "#section-2", "#section-3"],
    []
  );
  const sectionNames = useMemo(() => ["Start", "01", "02", "03"], []);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const [activeSection, setActiveSection] = useState("#start");

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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <SideNav>
      <ProgressLine>
        <ProgressIndicator style={{ height: progressHeight }} />
        {sections.map((section, index) => (
          <NavLink
            key={section}
            href={section}
            $active={activeSection === section}
            style={{ top: `${(index / (sections.length - 1)) * 100}%` }}
          >
            <span>{sectionNames[index]}</span>
          </NavLink>
        ))}
      </ProgressLine>
    </SideNav>
  );
};

export default Navigation;
