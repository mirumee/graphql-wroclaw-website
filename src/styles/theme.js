import { css } from "styled-components"

const sizes = {
  mobile: `320`,
  mobileL: `375`,
  tablet: `425`,
  laptop: `768`,
  laptopL: `1024`,
  desktop: `1440`,
  desktopL: `1920`,
  "4k": `2560`,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export const theme = {
  // theme colors
  colors: {
    mainBrandColor: `#F10ABC`,
    primaryColor: `#29255B`,
    secondaryColor: `#fff`,
    thirdColor: `#1C1740`,
  },
  // media queries
  media,
  breakpoints: ["375px", "768px", "1024px", `1440px`, `1920px`],
  space: [0, 4, 8, 16, 32, 48, 64, 96, 128, 192, 288, 416],
}

export default theme
