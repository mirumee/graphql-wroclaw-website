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
    <Nav mx={[3, 4, 5, 6, 6]} mt={[3, 4, 5]}>
      <Nav.SiteLogo href="https://www.youtube.com/channel/UCg_ptb-U75e7BprLCGS4s1g">
        <Logo.GraphQLWroclaw />
        <Logo.GraphQLWroclawWithBrand />
      </Nav.SiteLogo>
      <Nav.MenuContainer>
        <Nav.LogoContainer menu>
          <a
            href="https://www.youtube.com/channel/UCg_ptb-U75e7BprLCGS4s1g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo.Youtube />
          </a>
          <a
            href="https://www.facebook.com/mirumeelabs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo.Facebook />
          </a>
          <a
            href="https://www.meetup.com/GraphQL-Wroclaw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo.Meetup />
          </a>
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
            <span>Menu</span>
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
                <a
                  href="https://www.youtube.com/channel/UCg_ptb-U75e7BprLCGS4s1g"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Logo.Youtube />
                </a>
                <a
                  href="https://www.facebook.com/mirumeelabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Logo.Facebook />
                </a>
                <a
                  href="https://www.meetup.com/GraphQL-Wroclaw/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Logo.Meetup />
                </a>
              </Nav.LogoContainer>
            </Nav.Options>
          )}
        </Nav.Menu>
      </Nav.MenuContainer>
    </Nav>
  )
}

export default Navbar
