import styled from "styled-components"

import Line from "./Line"

const MenuButton = styled.div`
  width: 111px;
  height: 36px;
  border: 3px solid ${props => props.theme.colors.primaryColor} !important;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${props =>
    props.menuOpen
      ? props.theme.colors.mainBrandColor
      : props.theme.colors.primaryColor};
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  background: ${props =>
    props.menuOpen ? props.theme.colors.primaryColor : "transparent"};
  transition: 0.25s all;
  ${props =>
    props.top || props.bottom
      ? props => props.theme.colors.primaryColor
      : props => props.theme.colors.mainBrandColor};
  &:hover {
    background: ${props => props.theme.colors.primaryColor};
    color: ${props => props.theme.colors.mainBrandColor};
    ${Line} {
      border-color: ${props => props.theme.colors.mainBrandColor};
      background: ${props => props.theme.colors.mainBrandColor};
    }
  }

  ${props => props.theme.media.laptop`
  width: 156px;
  height: 48px;`};
`

export default MenuButton
