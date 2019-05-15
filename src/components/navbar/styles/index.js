import styled from "styled-components"

import MenuContainer from "./MenuContainer"
import LogoContainer from "./LogoContainer"
import Menu from "./Menu"
import MenuButton from "./MenuButton"
import Line from "./Line"
import Burger from "./Burger"
import Options from "./Options"
import Element from "./Element"
import SiteLogo from "./SiteLogo"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 10px 15px;
`

Nav.MenuContainer = MenuContainer
Nav.LogoContainer = LogoContainer
Nav.MenuButton = MenuButton
Nav.SiteLogo = SiteLogo
Nav.Menu = Menu
Nav.Line = Line
Nav.Burger = Burger
Nav.Options = Options
Nav.Element = Element

export default Nav
