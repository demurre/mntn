import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --font: "Satoshi", sans-serif;
    --primary-color: #0b1d26;
    --secondary-color: #fbd784;
    --primary-text-color: #ececec;
    --font-size-l: 80px;
    --font-size-m: 24px;
    --font-size-s: 18px;
    --border-radius-m: 6px;
    --margin: 16px;
    --hover-color: #b2b2b2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font);
    background-color: var(--primary-color);
  }

  a {
    text-decoration: none;
    color: var(--primary-text-color);
    font-weight: bold;
    font-size: var(--font-size-m);
  }

  a:hover {
    color: var(--hover-color);
  }
`;

export default GlobalStyles;
