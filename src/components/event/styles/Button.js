import styled from "styled-components"

const Button = styled.div`
  width: 36px;
  height: 36px;
  background: ${props => props.theme.colors.mainBrandColor};
  box-shadow: 0px 0px 0px 12px rgba(241, 10, 188, 0.1);
  position: absolute;
  right: 2rem;
  bottom: 0;
  transform: translateY(50%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transition: 0.5s all ease-in-out;
    transform: ${props => (props.menuOpen ? `rotate(180deg)` : `rotate(0deg)`)};
  }

  &active,
  &:hover {
    background: ${props => props.theme.colors.primaryColor};
  }
`

export default Button
