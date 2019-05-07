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
`

export default GlobalStyle
