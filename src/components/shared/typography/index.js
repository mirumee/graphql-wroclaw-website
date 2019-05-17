import { rem } from 'polished';
import styled, { css } from 'styled-components';

const baseStyles = css`
  color: ${props => props.theme.colors.black || '#222'};
  line-height: 1.2;
`;

const H1 = styled.h1`
  ${baseStyles}
  font-size: ${rem('33px')};
`;

const H2 = styled.h2`
  ${baseStyles};
  font-size: ${rem('28px')};
`;

const H3 = styled.h3`
  ${baseStyles};
  font-size: ${rem('23px')};
`;

const Subheader = styled.h3`
  ${baseStyles};
  font-size: ${rem('23px')};
`;

const H4 = styled.h4`
  ${baseStyles};
  font-size: ${rem('19px')};
`;

const H5 = styled.h5`
  ${baseStyles};
  font-size: ${rem('19px')};
`;

const H6 = styled.h6`
  ${baseStyles};
  font-size: ${rem('19px')};
`;

const Heading = {
  H1,
  H2,
  H3,
  Subheader,
  H4,
  h5,
  h6
};

module.exports = Heading;