import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  color: var(--primary-text-color);
  max-width: 1200px;
  margin: 20px auto;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 100%;
    padding: 0 15px;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  margin: 0 15px;
  gap: 10px;

  @media (max-width: 768px) {
    margin: 10px 0;
    width: 100%;
  }
`;

const FooterHeading = styled.h3`
  color: var(--secondary-color);
`;

const FooterParagraph = styled.p`
  font-size: var(--font-size-s);
  color: gray;
`;

const FooterImage = styled.img`
  width: 25%;

  @media (max-width: 768px) {
    width: 50%;
    margin-bottom: 10px;
    max-width: 100%;
  }
`;

const FooterLink = styled.a`
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: var(--font-size-s);
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterImage src="Logo.svg" alt="Logo MNTN" />
        <h2>
          Get out there & discover your next slope, mountain & destination!
        </h2>
        <FooterParagraph>Copyright MNTN, Inc. Terms & Privacy</FooterParagraph>
      </FooterSection>

      <FooterSection>
        <FooterHeading>About MNTN</FooterHeading>
        <FooterLink href="#start">Contribution & Writers</FooterLink>
        <FooterLink href="#start">Write For Us</FooterLink>
        <FooterLink href="#start">Contact Us</FooterLink>
        <FooterLink href="#start">Privacy Police</FooterLink>
      </FooterSection>

      <FooterSection>
        <FooterHeading>More on MNTN</FooterHeading>
        <FooterLink href="#start">The Team</FooterLink>
        <FooterLink href="#start">Jobs</FooterLink>
        <FooterLink href="#start">Press</FooterLink>
      </FooterSection>
    </FooterContainer>
  );
}

export default Footer;
