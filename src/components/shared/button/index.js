import styled from "styled-components"

export const StyledButton = styled.a`
  display: inline-block;
  width: 265px;
  height: 60px;
  top: 10px;
  left: 10px;
  border: none;
  margin: 25px 0 0 0;
  position: relative;
  background-color: transparent;

  background: ${props => `linear-gradient(
      to right,
      transparent 25%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(${
      props.secondary
        ? props.theme.colors.secondaryColor
        : props.theme.colors.primaryColor
    } 25%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(to right, ${
      props.secondary
        ? props.theme.colors.secondaryColor
        : props.theme.colors.primaryColor
    } 25%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(transparent 50%, rgba(255, 255, 255, 0) 0%)`};

  background-position: 100% 100%;
  background-repeat: repeat-x, repeat-y;
  background-size: 13px 3px, 3px 13px;

  &:after {
    ${({ text }) => `
    content: "${text || ` `}";
    `}
    position: absolute;
    width: 100%;
    height: 60px;
    top: -10px;
    left: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    border: 3px solid
      ${props =>
        props.secondary
          ? props.theme.colors.secondaryColor
          : props.theme.colors.primaryColor};

    color: ${props =>
      props.secondary
        ? props.theme.colors.secondaryColor
        : props.theme.colors.primaryColor};
    cursor: pointer;
    background-color: transparent;
  }

  &:active {
    &:after {
      top: 0px;
      left: 0px;
    }
  }

  &:hover {
    &:after {
      transition: 0.2s all;
      background: ${props =>
        props.secondary
          ? props.theme.colors.secondaryColor
          : props.theme.colors.primaryColor};
      color: ${props =>
        props.secondary
          ? props.theme.colors.primaryColor
          : props.theme.colors.secondaryColor};
    }
  }
  &:focus {
    outline: none;
  }
  &:before {
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    bottom: 0;
    right: 0;
    background: ${props =>
      props.secondary
        ? props.theme.colors.secondaryColor
        : props.theme.colors.primaryColor};
    color: ${props =>
      props.secondary
        ? props.theme.colors.secondaryColor
        : props.theme.colors.primaryColor};
  }
`

export default { StyledButton }
