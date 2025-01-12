import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
    font-size: 10px;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: "Poppins", sans-serif;
  }
`