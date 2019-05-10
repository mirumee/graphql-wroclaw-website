import styled from "styled-components"

const Content = styled.div`
  width: 100%;
  max-height: ${props => (props.menuOpen ? `1000px` : `0px`)};
  opacity: ${props => (props.menuOpen ? 1 : 0)};
  overflow: hidden;
  padding: ${props =>
    props.menuOpen ? `30px 30px 40px 30px` : `0px 30px 0px 30px`};
  transition: max-height 0.5s ease-in-out, 0.5s padding ease-in-out,
    0.3s opacity ease-in-out;
`

export default Content
