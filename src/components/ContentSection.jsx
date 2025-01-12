import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMinus } from "@fortawesome/free-solid-svg-icons";

const ContentSectionContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "textAlign",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  color: var(--primary-text-color);

  ${(props) =>
    props.$textAlign === "right" &&
    `
    flex-direction: row-reverse;
  `}

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
`;

const TextContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  max-width: 50%;
  margin: 0 20px;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0;
  }

  a {
    color: var(--secondary-color);

    &:hover {
      color: #e1a823;
    }

    @media (max-width: 768px) {
      font-size: var(--font-size-s);
    }
  }

  h1 {
    font-size: 64px;

    @media (max-width: 768px) {
      font-size: var(--font-size-m);
    }
  }

  h2,
  p {
    font-size: var(--font-size-m);

    @media (max-width: 768px) {
      font-size: var(--font-size-s);
    }
  }

  p {
    color: var(--secondary-color);
  }
`;

const Count = styled.div`
  position: absolute;
  left: 0;
  bottom: 210px;
  z-index: -1;
  opacity: 0.1;
  font-size: 200px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 150px;
    bottom: 150px;
  }
`;

const Image = styled.img`
  max-width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function ContentSection({ data, id }) {
  const sectionNumber = id.match(/(\d+)/)[0];
  const formattedCount = sectionNumber.padStart(2, "0");

  return (
    <ContentSectionContainer id={id} $textAlign={data.textAlign}>
      <TextContent>
        <Count>{formattedCount}</Count>
        <p>
          <FontAwesomeIcon icon={faMinus} /> {data.title}
        </p>
        <h1>{data.heading}</h1>
        <h2>{data.description}</h2>
        <a href={data.linkHref}>
          read more <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </TextContent>
      <Image src={data.imageSrc} alt={data.imageAlt} />
    </ContentSectionContainer>
  );
}

export default ContentSection;
