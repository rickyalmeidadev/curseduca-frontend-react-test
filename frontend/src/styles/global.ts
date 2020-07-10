import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background}
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.grey}  ;
    border-radius: 24px;
    border: 4px solid ${props => props.theme.colors.background}
  }

  html, body, #root {
    width: 100vw;
    max-width: 100%;
    min-height: 100vh;

    background-color: ${props => props.theme.colors.background}
  }

  html {
    font-size: 10px;
  }

  body {
    -webkit-font-smoothing: antialiased;
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.colors.grey} ${props => props.theme.colors.background};
  }

  body, input, button {
    font: 1.6rem 'Work Sans', sans-serif;
    color: ${props => props.theme.colors.dark};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
