import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/theme"
import { GlobalStyle } from "../../styles/GlobalStyle"
import Navbar from "../navbar"
import Footer from "../footer"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
