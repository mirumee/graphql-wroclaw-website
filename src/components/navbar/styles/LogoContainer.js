import styled from "styled-components"

const LogoContainer = styled.div`
  display: ${props => (props.menu ? `none` : `flex`)};
  width: 100%;
  justify-content: ${props => (props.menu ? `space-evenly` : `space-between`)};
  a {
    text-decoration: none;
    color: unset;
    svg {
      border: solid 3px
        ${props =>
          props.menu
            ? props.theme.colors.primaryColor
            : props.theme.colors.whiteColor};
      width: 64px;
      padding: 9px 0;
      height: 48px;
      path {
        fill: ${props =>
          props.menu
            ? props.theme.colors.primaryColor
            : props.theme.colors.whiteColor};
      }
      cursor: pointer;
      &:hover {
        border-color: ${props => props.theme.colors.mainBrandColor};
        background: ${props => props.theme.colors.mainBrandColor};
        transition: all 0.2s ease;
        path {
          fill: ${props => props.theme.colors.secondaryColor};
        }
      }
    }
  }

  ${props =>
    props.menu
      ? props.theme.media.laptop`display: flex;`
      : props.theme.media.laptop`display: none;`};
`

export default LogoContainer
