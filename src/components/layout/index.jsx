import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/theme"
import { GlobalStyle } from "../../styles/GlobalStyle"
import Navbar from "../navbar"
import PageLayout from "./style"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <PageLayout>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
    </PageLayout>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
