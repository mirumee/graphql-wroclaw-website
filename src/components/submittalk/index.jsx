import styled from "styled-components"

const SubmitTalk = styled.div`
  background-color: ${props => props.theme.colors.thirdColor};
  color: ${props => props.theme.colors.secondaryColor};
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3rem 0rem;
  ${props => props.theme.media.tablet`padding: 3rem 2rem`}

  h2 {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
    padding: 0;
    ${props => props.theme.media.tablet`padding: 0rem 1rem`}
  }

  a {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`

export default SubmitTalk
