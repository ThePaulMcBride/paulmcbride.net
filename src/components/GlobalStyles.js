import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    color: #1F5F8B;
    transition: color 200ms ease;

    &:hover {
      color: black;
    }
  }

  p code {
    padding: 3px 6px!important;
  }

  // code.language-text {
  //   font-family: Courier, monospace;
  //   font-size: 16px;
  //   background-color: #F9FAFB!important;
  //   color: inherit;
  //   text-shadow: none;
  // }
`;

export default GlobalStyle;
