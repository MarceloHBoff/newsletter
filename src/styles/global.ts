import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  #__next {
    height: 100vh;
  }

  body {
    background: #212121;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Roboto, serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
    border: 0;
    background: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`
