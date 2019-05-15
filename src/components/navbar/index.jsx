import React, { useRef, useState, useEffect } from "react"

import Nav from "./styles"
import Logo from "../../icons"

const menuLinks = [
  {
    name: "Start",
    anchor: "start",
  },
  {
    name: "Speakers",
    anchor: "speakers",
  },
  {
    name: "About",
    anchor: "about",
  },
  {
    name: "Past Events",
    anchor: "past-events",
  },
  {
    name: "Stream",
    anchor: "stream",
  },
  {
    name: "Organisers",
    anchor: "organisers",
  },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const node = useRef()

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return
    }
    setMenuOpen(false)
  }

  return (
    <Nav>
      <Nav.SiteLogo>
        <Logo.GraphQLWroclaw />
        <Logo.GraphQLWroclawWithBrand />
      </Nav.SiteLogo>
      <Nav.MenuContainer>
        <Nav.LogoContainer menu>
          <Logo.Youtube />
          <Logo.Facebook />
          <Logo.Meetup />
        </Nav.LogoContainer>
        <Nav.Menu ref={node}>
          <Nav.MenuButton
            onClick={() => setMenuOpen(!menuOpen)}
            menuOpen={menuOpen}
          >
            <Nav.Burger>
              <Nav.Line top menuOpen={menuOpen} />
              <Nav.Line middle menuOpen={menuOpen} />
              <Nav.Line bottom menuOpen={menuOpen} />
            </Nav.Burger>
            Menu
          </Nav.MenuButton>
          {menuOpen && (
            <Nav.Options>
              {menuLinks.map(link => (
                <Nav.Element
                  onClick={() => setMenuOpen(!menuOpen)}
                  to={`/#${link.anchor}`}
                  key={link.anchor}
                >
                  {link.name}
                </Nav.Element>
              ))}
              <Nav.LogoContainer>
                <Logo.Youtube />
                <Logo.Facebook />
                <Logo.Meetup />
              </Nav.LogoContainer>
            </Nav.Options>
          )}
        </Nav.Menu>
      </Nav.MenuContainer>
    </Nav>
  )
}

export default Navbar
