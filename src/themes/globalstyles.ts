// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,h2,h3,h4 {
    font-family: 'bennet-banner';
    font-weight: black;
    color: '#303030';
    font-size: 24px;
  }

  p {
    font-family: 'bebas-neue-pro-expanded';
    font-size: 16px;
    color: #828181;
  }
`;

export default GlobalStyle;
