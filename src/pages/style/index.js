import styled, { keyframes } from "styled-components"
import Img from "gatsby-image"


const animation = (offset) => {
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

const between = (from, to, fromWidth, toWidth) => {
  const slope =  (to - from) / (toWidth - fromWidth);
  const base = from - slope * fromWidth;
  return `calc(${base}px + (100vw * ${slope}))`;
}


const StyledImage = styled(Img)`
  position: absolute !important;
  display: block !important;
  top: -30px !important;
  right: 0;
  animation: ${animation(4)} 5s ease-in-out infinite;
  div {
    padding-bottom: 0 !important;
  }
  img {
    position: unset !important;
  }

  ${props => props.theme.media.desktop`  animation: ${animation(7)} 5s ease-in-out infinite;`}
`

const StyledBackground = styled.div`
  position: relative;
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

  ${props => props.theme.media.laptop`  padding: 60% 20px 20px 20px;`}
  ${props => props.theme.media.laptopL`  padding: 40% 20px 20px 20px;`}
  ${props => props.theme.media.desktop`  padding: 13% 20px 6% 20px;`}
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
  padding: 3rem 2rem;
  color: ${props => props.theme.colors.secondaryColor};

  h3{
    padding-bottom: 1rem;
  }
`

const OrnamentLeft = styled.div`
  border-left: 8px solid ${props => props.theme.colors.primaryColor};
  margin-bottom: 2rem;
  padding: 1rem 0 1rem 1rem;
`

const SpeakersContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

const DecoratedImg = styled(Img)`
  position: relative;
  overflow: visible !important;
  margin-bottom: 1rem;
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

const Section = styled.div`
  margin: 30px 20px 20px 30px;
`

const LogoContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 360px;
  ${props =>
    props.theme.media.laptop`justify-content: center;   max-width: none`}

  svg {
    padding: ${between(35,86,360,1920)};
    height: ${between(106,259,360,1920)};
    width: ${between(237,576,360,1920)};
    background: rgba(41, 37, 91, 0.05);
  }

  svg + svg {
    margin-top: 4%;
    margin-left: auto;
    ${props => props.theme.media.laptop`margin-left: 4vw`}
  }
`

export {
  StyledBackground,
  StyledImage,
  HeaderContainer,
  FlexContainer,
  OrnamentLeft,
  DecoratedImg,
  Section,
  StyledContainer,
  SpeakersContainer,
  LogoContainer,
}
