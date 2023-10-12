import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  html {
    width: 100vw;
  }

  body {
    width: 100%;
    height: 100vh;
    background: linear-gradient(50deg, #181818 0%, #2e2e2e 100%);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
