import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-white:  #EFFCD5;
    --secondary-white: #FFFFFF;
    
    --primary-black: #000000;
    
    --primary-blue: #1C4CBD;
    --secondary-blue: #5EBDFC;
   
    --primary-red: #CE2211;
    --secondary-red: #E54222;
    
    --primary-yellow: #D5A100;
    --secondary-yellow: #FFCC00;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media(max-width: 720px) {
      font-size: 87.5% // 14px
    }

    @media(max-width: 600px) {
      font-size: 81.25%; // 13px
    }

    body {
      background: #D3D3D3;
    }

    body, input, textarea, button {
      font-family: 'Smooch Sans', sans-serif;
      font-weight: 400;
    }

    body, button {
      color: var(--black);
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
  }
`