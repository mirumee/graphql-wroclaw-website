import styled from "styled-components"

const SiteLogo = styled.a`
  appearance: div;
  svg {
    display: block;
    ${props => props.theme.media.laptop`display: none`}
  }
  svg + svg {
    display: none;
    ${props => props.theme.media.laptop`display: block`}
  }
`

export default SiteLogo
