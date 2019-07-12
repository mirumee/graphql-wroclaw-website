import React from "react"

import Nav from "./styles"
import Logo from "../../icons"

class Navbar extends React.Component {
  state = {
    menuOpen: false,
  }

  menuLinks = [
    { href: "#start", text: `Start` },
    // { href: "#speakers", text: `Speakers` },
    { href: "#about", text: `About` },
    { href: "#past-events", text: `Past Events` },
    { href: "#stream", text: `Stream` },
    { href: "#organizers", text: `Organizers` },
  ]

  toggleList() {
    const { menuOpen } = this.state
    this.setState({ menuOpen: !menuOpen })
  }

  handleClickOutside() {
    this.setState({ menuOpen: false })
  }

  render() {
    const { menuOpen } = this.state
    return (
      <Nav>
        <Logo.GraphQLWroclaw />
        <Nav.MenuContainer>
          <Nav.LogoContainer menu>
            <Logo.Youtube />
            <Logo.Facebook />
            <Logo.Meetup />
          </Nav.LogoContainer>
          <Nav.Menu>
            <Nav.MenuButton
              onClick={() => this.toggleList()}
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
                {this.menuLinks.map(({ href, text }) => (
                  <Nav.Element href={href} key={href}>
                    {text}
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
}

export default Navbar
