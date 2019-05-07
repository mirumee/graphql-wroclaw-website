import styledNormalize from "styled-normalize"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
${styledNormalize};
@font-face {
   font-family: 'Space Grotesk';
   font-style: normal;
   font-weight: 300;
   src:url('../../../public/fonts/SpaceGrotesk-Light.woff2') format('woff2'),
       url('../../../public/fonts/SpaceGrotesk-Light.woff') format('woff'),
}
* {
    font-family: Space Grotesk, sans-serif;
    box-sizing: inherit;
}
html {
    font-size: 16px;
    box-sizing: border-box;
}

h1 {
  @media (min-width: 1920px) {
    font-size: 12rem;
  }
  @media (max-width: 1919px) {
    font-size: 9rem;
  }
  @media (max-width: 1439px) {
    font-size: 8rem;
  }
  @media (max-width: 767px) {
    font-size: 3rem;
  }
}
h2 {
  @media (min-width: 1920px) {
    font-size: 4rem;
  }
  @media (max-width: 1919px) {
    font-size: 4rem;
  }
  @media (max-width: 1439px) {
    font-size: 3rem;
  }
  @media (max-width: 767px) {
    font-size: 3rem;
  }
}
h3 {
  @media (min-width: 1920px) {
    font-size: 3rem;
  }
  @media (max-width: 1919px) {
    font-size: 2.25rem;
  }
  @media (max-width: 1439px) {
    font-size: 2.25rem;
  }
  @media (max-width: 767px) {
    font-size: 2.25rem;
  }
}
h4 {
  @media (min-width: 1920px) {
    font-size: 2.25rem;
  }
  @media (max-width: 1919px) {
    font-size: 2.25rem;
  }
  @media (max-width: 1439px) {
    font-size: 2rem;
  }
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
}
h5 {
  @media (min-width: 1920px) {
    font-size: 2.25rem;
  }
  @media (max-width: 1919px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1439px) {
    font-size: 1.5rem;
  }
  @media (max-width: 767px) {
    font-size: 1.125rem;
  }
}
h6 {
  @media (min-width: 1920px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1919px) {
    font-size: 1.125rem;
  }
  @media (max-width: 1439px) {
    font-size: 1.125rem;
  }
  @media (max-width: 767px) {
    font-size: 1.125rem;
  }
}
`

export default GlobalStyle
