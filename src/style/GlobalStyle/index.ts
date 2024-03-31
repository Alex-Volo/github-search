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

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
	  display: none;
  }

  .main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 30px;
  }

  .scronly {
    width: 1px;
    height: 1px;
    position: absolute;
    clip: rect(0 0 0 0);
    font-size: 1px;
  }
`
