import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${({ theme }) => theme.color.base.background};
    color: ${({ theme }) => theme.color.base.text};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }
  
  button {
    cursor: pointer;
    border: 0;
  }

  a {
    text-decoration: none;
  }

  img {
    pointer-events: none;
    height: auto;
  }

  @media (max-width: 515px) {
    html {
      font-size: 87.5%;
    }
}
`
