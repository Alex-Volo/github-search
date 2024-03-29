import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-weight: normal;
    font-display: swap;
    src: '/assets/fonts/Roboto-Regular.ttf';
  }

  :root {
    
  }
  
  body {
    margin: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #222;
    min-height: 100vh;
    min-width: 100%;
    max-width: 100%;
  }
  
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    min-height: 100vh;
  }
`
