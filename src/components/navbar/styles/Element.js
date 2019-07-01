import styled from "styled-components"
import { Link } from "react-scroll"

const Element = styled(Link)`
  margin-bottom: 22px;
  color: ${props => props.theme.colors.secondaryColor};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: inherit;
  text-decoration: inherit;
  display: block;
  cursor: pointer;
`

export default Element
