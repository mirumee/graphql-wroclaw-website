import styled from "styled-components";

import Icon from "./Icon";

const MediaButton = styled.a`
  width: 36px;
  display: flex;
  height: 36px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primaryColor};
  box-shadow: rgba(41, 37, 91, 0.1) 0px 0px 0px 6px;
  transition: 0.2s all;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.colors.mainBrandColor};
    box-shadow: rgba(241, 10, 188, 0.1) 0px 0px 0px 6px;
  }
`;

MediaButton.Icon = Icon;

export default MediaButton;
