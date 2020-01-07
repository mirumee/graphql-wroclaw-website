import styled from "styled-components"

import Copyright from "./Copyright"

const Footnote = styled.div`
  display: flex;
  max-width: 1600px;
  justify-content: center;
  align-items: center;
  margin: 0 auto 0 auto;
  padding: 1.5rem;
  border-top: 1px solid #bfbdce;

  ${props => props.theme.media.laptop`
      justify-content: space-between;`};

  svg {
    display: none;

    ${props => props.theme.media.laptop`
    display: block`};
  }
`

Footnote.Copyright = Copyright

export default Footnote
