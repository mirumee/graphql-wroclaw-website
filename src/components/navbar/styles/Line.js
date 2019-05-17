import styled from "styled-components"

const Line = styled.div`
  height: 3px;
  width: 23px;
  width: ${props => props.bottom && !props.menuOpen && `12px`};
  width: ${props => props.top && !props.menuOpen && `16px`};
  border: 1.5px solid
    ${props =>
      (props.top && !props.menuOpen) || (props.bottom && !props.menuOpen)
        ? props => props.theme.colors.primaryColor
        : props => props.theme.colors.mainBrandColor};
  transition: all 0.2s ease;
  transform-origin: left;
  transform: ${props =>
    (props.top && props.menuOpen && `rotate(34deg)`) ||
    (props.bottom && props.menuOpen && `rotate(-34deg)`)};
  transform: ${props => props.middle && props.menuOpen && `translateX(-30px)`};
  opacity: ${props => (props.middle && props.menuOpen ? 0 : 1)};
  background-color: ${props =>
    props.middle || props.menuOpen
      ? props.theme.colors.mainBrandColor
      : props.theme.colors.primaryColor};

  ${props => props.theme.media.laptop`
  width: 28px;
  width: ${props => props.bottom && !props.menuOpen && `15px`};
  width: ${props => props.top && !props.menuOpen && `20px`};;
  transform: ${props =>
    (props.top && props.menuOpen && `rotate(29deg)`) ||
    (props.bottom && props.menuOpen && `rotate(-29deg)`)};`}
`

export default Line
