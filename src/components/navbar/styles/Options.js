import styled from "styled-components";

const Options = styled.div`
  color: ${props => props.theme.colors.secondaryColor};
  background-color: ${props => props.theme.colors.primaryColor};
  position: absolute;
  right: 0;
  width: 272px;
  z-index: 10;
  padding: 40px 20px;
  transition: 0.2s all;

  ${props => props.theme.media.laptop`width: 156px;`};
`;

export default Options;
