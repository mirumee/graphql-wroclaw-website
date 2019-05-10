import styled from "styled-components";

const Icon = styled.span`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 12px solid ${props => props.theme.colors.secondaryColor};
  transform: rotate(-90deg) translateY(1px);
`;

export default Icon;
