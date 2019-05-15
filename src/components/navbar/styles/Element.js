import styled from "styled-components"
import { Link } from "gatsby"

const Element = styled(Link)`
  margin-bottom: 22px;
  color: ${props => props.theme.colors.secondaryColor};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: inherit;
  text-decoration: inherit;
  display: block;
`

export default Element
