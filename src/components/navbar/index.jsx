import React from "react"

import Nav from "./styles"
import Logo from "../../icons"

const menuLinks = [
  {
    name: "Start",
    anchor: "start",
  },
  /*{
    name: "Speakers",
    anchor: "speakers",
  },*/
  {
    name: "Submit talk",
    anchor: "submit-talk",
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

class Navbar extends React.Component {
  state = {
    prevScrollpos: 0,
    menuOpen: false,
    onTop: true,
  }

  node = React.createRef()

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside)
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside)
    window.addEventListener("scroll", this.handleScroll)
  }

  handleClickOutside = e => {
    if (this.node.current.contains(e.target)) {
      return
    }
    this.setState({ menuOpen: false })
  }

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    const onTop = currentScrollPos < 80

    this.setState({
      prevScrollpos: currentScrollPos,
      onTop,
    })
  }

  handleClick() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    const { menuOpen, onTop } = this.state
    return (
      <Nav px={[3, 3, 4, 6, 7]} py={[3, 3, 4]} onTop={onTop}>
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
              href="https://twitter.com/GraphQLWroclaw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Logo.Twitter />
            </a>
            <a
              href="https://www.meetup.com/GraphQL-Wroclaw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Logo.Meetup />
            </a>
          </Nav.LogoContainer>
          <Nav.Menu ref={this.node}>
            <Nav.MenuButton
              onClick={() => this.handleClick()}
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
                    to={link.anchor}
                    spy={true}
                    smooth={true}
                    delay={70}
                    offset={-100}
                    duration={500}
                    onClick={() => this.handleClick()}
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
                    <Logo.Twitter />
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
}

export default Navbar
