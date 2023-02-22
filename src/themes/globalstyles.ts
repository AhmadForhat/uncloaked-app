// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import { tokens } from './tokens';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,h2,h3,h4 {
    font-family: 'bennet-banner';
    font-weight: 900;
    font-size: 28px;
    color: ${tokens.colors.gray.darker};
  }

  p {
    font-family: 'bebas-neue-pro-expanded';
    font-size: 18px;
    color: ${tokens.colors.gray.dark};
  }
`;

export default GlobalStyle;
