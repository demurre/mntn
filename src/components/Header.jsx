import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const HeaderContainer = styled.header`
  position: absolute;
  width: 100%;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--primary-text-color);
  background-color: transparent;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const Logo = styled.img`
  width: auto;

  @media (max-width: 768px) {
    width: 25%;
  }
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;

    @media (max-width: 768px) {
      display: none;
    }
  }

  li {
    margin-right: var(--margin);
  }
`;

const AccountLink = styled.a`
  display: flex;
  align-items: center;
  color: var(--primary-text-color);
  font-size: var(--font-size-m);
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: var(--font-size-s);
  }

  svg {
    margin-right: 5px;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo src="Logo.svg" alt="Logo MNTN" />
      <Nav>
        <ul>
          <li>
            <a href="#start">Equipment</a>
          </li>
          <li>
            <a href="#start">About us</a>
          </li>
          <li>
            <a href="#start">Blog</a>
          </li>
        </ul>
      </Nav>
      <AccountLink href="#start">
        <FontAwesomeIcon icon={faUser} />
        Account
      </AccountLink>
    </HeaderContainer>
  );
}

export default Header;
