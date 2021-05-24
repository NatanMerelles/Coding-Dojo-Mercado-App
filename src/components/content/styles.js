import Styled from 'styled-components';

import { Container } from '@material-ui/core';

const StyledContainer = Styled(Container)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  margin-top: 35px;
`;

export { StyledContainer }