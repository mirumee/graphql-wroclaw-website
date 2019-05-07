import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  div:first-child {
    width: 80%;
    p:first-child {
      font-weight: bold;
      line-height: 1.7;
    }
    p {
      margin-bottom: 0.5rem;
    }
  }
`;

export default ContentContainer;
