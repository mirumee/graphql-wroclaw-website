import styled from "styled-components";

const Copyright = styled.p`
  margin-bottom: 0;
  font-size: 12px;

  ${props => props.theme.media.laptop`
        font-size: 14px;`};
`;

export default Copyright;
