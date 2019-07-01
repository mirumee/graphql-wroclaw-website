import styled from "styled-components"
import { Flex } from "@rebass/grid"

import MenuContainer from "./MenuContainer"
import LogoContainer from "./LogoContainer"
import Menu from "./Menu"
import MenuButton from "./MenuButton"
import Line from "./Line"
import Burger from "./Burger"
import Options from "./Options"
import Element from "./Element"
import SiteLogo from "./SiteLogo"

const Nav = styled(Flex)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0;
  transition: 0.3s all;
  left: 0;
  right: 0;
  background-color: ${props =>
    props.onTop ? "transparent" : `rgba(255, 255, 255, 0.98)`};
  ${props =>
    props.onTop ||
    `padding-top: 5px !important;
  padding-bottom: 5px !important;`};
  z-index: 100;
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
