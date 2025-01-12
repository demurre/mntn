import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faMinus } from "@fortawesome/free-solid-svg-icons";
import { data } from "../assets/data";
import ContentSection from "../components/ContentSection";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: var(--primary-text-color);
`;

const MainContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/mount.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  h1 {
    font-size: var(--font-size-l);
    text-align: center;
  }

  p {
    font-size: var(--font-size-m);
    color: var(--secondary-color);
  }

  a {
    margin-top: 10px;
    text-decoration: none;
    color: var(--primary-text-color);
    font-size: var(--font-size-m);
    display: flex;
    align-items: center;

    &:hover {
      color: var(--hover-color);
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: var(--font-size-s);
    }

    h1 {
      font-size: var(--font-size-m);
    }

    p {
      font-size: var(--font-size-s);
    }
  }
`;

function Main() {
  return (
    <MainContainer>
      <MainContent id="start">
        <p>
          <FontAwesomeIcon icon={faMinus} /> A HIKING GUIDE
        </p>
        <h1>
          Be Prepared For The <br />
          Mountains And Beyond!
        </h1>
        <a href="#section-1">
          scroll down <FontAwesomeIcon icon={faArrowDown} />
        </a>
      </MainContent>

      {data.map((item, index) => (
        <ContentSection key={index} data={item} id={`section-${index + 1}`} />
      ))}
    </MainContainer>
  );
}

export default Main;
