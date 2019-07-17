import styled from "styled-components"
import Img from "gatsby-image"

const Slider = styled.input.attrs(() => ({
  type: "range",
}))`
  -webkit-appearance: none;
  margin: 2% 0 10px 0;
  width: 70%;
  padding-top: 2rem;
  :focus {
    outline: none;
  }
  ${props => props.theme.media.desktopL`display: none;`}
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: rgba(41, 37, 91, 0.1);
    border-radius: 25px;
    border: 0px solid #000101;
  }
  ::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border-radius: 0;
    border: 3px solid ${props => props.theme.colors.primaryColor};
    height: 36px;
    width: 36px;
    background: ${props => props.theme.colors.secondaryColor};
    cursor: pointer;
    -webkit-appearance: none;
    transform: translate(0, -47%);
    background-image: radial-gradient(circle, black 1.5px, transparent 2px);
    background-position: 5%;
    background-size: 30px 4px;
    background-repeat: repeat-x;
    transition: 0.2s all;
    :hover {
      background: rgba(41, 35, 92, 0.2);
    }
    :active {
      background: rgba(41, 35, 92, 0.2);
    }
  }
  ::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: rgba(41, 37, 91, 0.1);
    border-radius: 25px;
    border: 0px solid #000101;
  }
  ::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border-radius: 0;
    border: 3px solid ${props => props.theme.colors.primaryColor};
    height: 36px;
    width: 36px;
    background: ${props => props.theme.colors.secondaryColor};
    cursor: pointer;
    transform: translate(0, 0);
    background-image: radial-gradient(circle, black 1.5px, transparent 2px);
    background-position: 3px;
    background-size: 30px 4px;
    background-repeat: repeat-x;
    transition: 0.2s all;
    :hover {
      background: rgba(41, 35, 92, 0.2);
    }
    :active {
      background: rgba(41, 35, 92, 0.2);
    }
  }
`

const Photo = styled(Img)`
  width: 100% !important;
  min-width: 160px;
  margin: 1rem;

  ${props => props.theme.media.desktop`  max-width: 410px;`}
`

const Carousel = styled.div`
  display: flex;
  overflow: visible;
  position: relative;
  right: ${props => `${props.sliderValue * props.carouselWidth * 0.01}px;`};
`
const CarouselWrapper = styled.div`
  overflow: hidden;
`

export default Slider

export { Photo, Carousel, CarouselWrapper }
