import styled from 'styled-components';

import { Container } from '@material-ui/core';

const StyledContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  margin-top: 35px;
  height: 526px;
`;

const Title = styled.h1`
  font-size: 22px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

export { StyledContainer, Title, Price, Wrapper }