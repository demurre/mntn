import styled from "styled-components";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const VerticalText = styled.p`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 16px;
  color: var(--primary-text-color);
`;

const SocialLink = styled.a`
  margin-top: 10px;
`;

function Social() {
  return (
    <SocialContainer>
      <VerticalText>Follow us</VerticalText>
      <SocialLink href="https://www.instagram.com/">
        <FontAwesomeIcon icon={faInstagram} />
      </SocialLink>
      <SocialLink href="https://twitter.com">
        <FontAwesomeIcon icon={faTwitter} />
      </SocialLink>
    </SocialContainer>
  );
}

export default Social;
