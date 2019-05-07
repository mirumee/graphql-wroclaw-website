import styled, { css, keyframes } from "styled-components";

const transitionY = keyframes`
  0% {
    transform: translateY(2px);
  }

  50% {
    transform: translateY(-2px);
  }

  100% {
    transform: translateY(2px);
  }

`;

const animation = () => css`
  ${transitionY} 3s ease-in-out infinite;
`;

const Rectangle = styled.div`
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 6px solid ${props => props.theme.colors.mainBrandColor};
  animation: ${props => (props.animated ? animation : ``)};
`;

export default Rectangle;
