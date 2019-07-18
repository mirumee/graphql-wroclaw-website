import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/theme"
import { GlobalStyle } from "../../styles/GlobalStyle"
import Navbar from "../navbar"
import Footer from "../footer"

const Layout = ({ children, withoutNav }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {!withoutNav && <Navbar />}
        <main>{children}</main>
        {!withoutNav && <Footer />}
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
