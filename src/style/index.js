import styled, { keyframes } from "styled-components"
import Img from "gatsby-image"

import { between } from "../styles/styling-helpers"

const animation = offset => {
  return keyframes`
  0% {
    transform: translateY(${offset}px);
  }

  50% {
    transform: translateY(-${offset}px);
  }

  100% {
    transform: translateY(${offset}px);
  }
`
}

const PageNotFoundImg = styled(Img)`
  animation: ${animation(4)} 5s ease-in-out infinite;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
`

const PageNotFound = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 10vh 0 20vh 0;
  text-align: center;
  h2 {
    margin-bottom: 1.5rem;
  }
`

const StyledImage = styled(Img)`
  position: absolute !important;
  display: block !important;
  top: -30px !important;
  right: 0;
  animation: ${animation(4)} 5s ease-in-out infinite;
  width: 100%;
  div {
    padding-bottom: 0 !important;
  }
  img {
    position: unset !important;
  }

  ${props => props.theme.media.laptop`
  top: -90px !important;
  width: 100%;
  max-width: 900px;`}

  ${props => props.theme.media.desktop`
  animation: ${animation(7)} 5s ease-in-out infinite;

  `}
`

const StyledBackground = styled.div`
  position: relative;
  margin-bottom: 3rem;
  background: linear-gradient(
    171deg,
    rgba(228, 228, 228, 0) -3%,
    rgba(192, 232, 244, 1) 33%,
    rgba(243, 246, 246, 0) 83%
  );
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 76% 0 20px 0;
  font-weight: bold;
  width: 100%;
  text-transform: uppercase;
  position: relative;
  z-index: 1;

  
  h1,h3,h5 {
    line-height: 1;
    margin-bottom: .5rem;
  }

  ${props => props.theme.media.laptop`  padding: 60% 0 20px 0;`}
  ${props => props.theme.media.laptopL`  padding: 40% 0 20px 0;`}
  ${props => props.theme.media.desktop`  padding: 13% 0 6% 0;`}
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

const StyledContainer = styled.div`
  background-color: ${props => props.theme.colors.primaryColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding: 2.5rem 2rem 3rem 2rem;
  color: ${props => props.theme.colors.secondaryColor};

  h3 {
    padding-bottom: 1.5rem;
    width: 80%;
    line-height: 1.4;
  }
`

const OrnamentLeft = styled.div`
  border-left: 8px solid ${props => props.theme.colors.primaryColor};
  margin-bottom: 2rem;
  padding: 1rem 0 1rem 2rem;
  ${props => props.theme.media.desktop`  padding: 1rem 0 1rem 3rem;`}
`

const DecoratedImg = styled(Img)`
  position: relative;
  overflow: visible !important;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  max-width: 700px;
  &:before {
    content: "";
    position: absolute;
    width: 85px;
    height: 30px;
    bottom: 0;
    right: 50%;
    background: ${props => props.theme.colors.mainBrandColor};
    color: ${props => props.theme.colors.primaryColor};
    z-index: 10;
    transform: translate(50%, 50%);
  }
`

const Subheader = styled.h3`
  font-size: 2.25rem;
  ${props => props.theme.media.laptop`font-size: 6rem;`}
  ${props => props.theme.media.desktop`font-size: 6rem;`}
  ${props => props.theme.media.desktopL`font-size: 9rem;`}
`

const LogoContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 360px;
  transition: 0.2s all;
  ${props =>
    props.theme.media.laptop`justify-content: center;   max-width: none`}
  a {
    svg {
      padding: ${between(35, 86, 360, 1920)};
      height: ${between(106, 259, 360, 1920)};
      width: ${between(237, 576, 360, 1920)};
      background: rgba(41, 37, 91, 0.1);
      transition: 0.4s all;
      path {
        fill: ${props => props.theme.colors.primaryColor};
        transition: 0.4s all;
      }
      :hover {
        background: rgba(41, 37, 91, 0.05);
        fill: red;
        transition: 0.4s all;
        path {
          fill: ${props => props.theme.colors.mainBrandColor};
        }
      }
    }
  }
  a + a {
    margin-top: 4%;
    ${props => props.theme.media.tablet`margin-top: 0`}
    ${props => props.theme.media.laptop`margin-left: 4vw`}
    svg {
      padding: ${between(35, 86, 360, 1920)};
      height: ${between(106, 259, 360, 1920)};
      width: ${between(237, 576, 360, 1920)};
      background: rgba(41, 37, 91, 0.1);
      transition: 0.4s all;
      path {
        fill: ${props => props.theme.colors.primaryColor};
        transition: 0.4s all;
      }
      :hover {
        background: rgba(41, 37, 91, 0.05);
        fill: red;
        transition: 0.4s all;
        path {
          fill: ${props => props.theme.colors.mainBrandColor};
        }
      }
    }
  }
`

export {
  StyledBackground,
  StyledImage,
  HeaderContainer,
  Subheader,
  FlexContainer,
  OrnamentLeft,
  DecoratedImg,
  StyledContainer,
  PageNotFoundImg,
  PageNotFound,
  LogoContainer,
}
