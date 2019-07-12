import styled from "styled-components"

const Element = styled.a`
  display: block;
  margin-bottom: 22px;
  color: ${props => props.theme.colors.secondaryColor};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  &:hover,
  &:active {
    color: ${props => props.theme.colors.mainBrandColor};
  }
`

export default Element
