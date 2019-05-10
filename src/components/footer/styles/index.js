import styled from "styled-components";

import Copyright from "./Copyright";

const Footnote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1.5rem 1.5rem 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${props => props.theme.colors.primaryColor};

  ${props => props.theme.media.laptop`
      justify-content: space-between;`};

  svg {
    display: none;

    ${props => props.theme.media.laptop`
    display: block`};
  }
`;

Footnote.Copyright = Copyright;

export default Footnote;
