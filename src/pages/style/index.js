import styled, { keyframes } from "styled-components"
import Img from "gatsby-image"

const transitionY = keyframes`
  0% {
    transform: translateY(4px);
  }

  50% {
    transform: translateY(-4px);
  }

  100% {
    transform: translateY(4px);
  }

`

const StyledImg = styled(Img)`
  position: absolute !important;
  display: block !important;
  top: -50px !important;
  right: 0;
  animation: ${transitionY} 5s ease-in-out infinite;
  div {
    padding-bottom: 0 !important;
  }
  img {
    position: unset !important;
  }
`

const StyledBackground = styled.div`
  position: relative;
  background: linear-gradient(
    166deg,
    rgba(228, 228, 228, 0) 18%,
    rgba(192, 232, 244, 1) 45%,
    rgba(243, 246, 246, 0) 83%
  );
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70% 20px 20px 20px;
  font-weight: bold;
  width: 100%;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  font-weight: bold;
  width: 100%;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  align-items: center;
  p {
    margin-bottom: 10px;
  }
`

export { StyledBackground, StyledImg, HeaderContainer, FlexContainer }
