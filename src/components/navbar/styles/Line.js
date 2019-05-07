import styled from "styled-components"

const Line = styled.div`
  height: 2px;
  width: 23px;
  width: ${props => props.bottom && !props.menuOpen && `12px`};
  width: ${props => props.top && !props.menuOpen && `16px`};
  border: 1.5px solid
    ${props =>
      (props.top && !props.menuOpen) || (props.bottom && !props.menuOpen)
        ? props => props.theme.colors.primaryColor
        : props => props.theme.colors.mainBrandColor};
  transition: all 0.2s ease;
  margin-bottom: ${props => (props.top ? `3px` : 0)};
  margin-top: ${props => (props.bottom ? `3px` : 0)};
  transform-origin: left;
  transform: ${props =>
    (props.top && props.menuOpen && `rotate(30deg)`) ||
    (props.bottom && props.menuOpen && `rotate(-30deg)`)};
  transform: ${props => props.middle && props.menuOpen && `translateX(-30px)`};
  opacity: ${props => (props.middle && props.menuOpen ? 0 : 1)};

  ${props => props.theme.media.laptop`
  width: 28px;
  width: ${props => props.bottom && !props.menuOpen && `15px`};
  width: ${props => props.top && !props.menuOpen && `20px`};;
  transform: ${props =>
    (props.top && props.menuOpen && `rotate(26deg)`) ||
    (props.bottom && props.menuOpen && `rotate(-26deg)`)};`}
`

export default Line
