import styled from 'styled-components';

import { Container } from '@material-ui/core';

const StyledContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  margin-top: 35px;
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

const Infos = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 20px;
  border-radius: 10px;
  .prediction{
    color: ${({ theme }) => theme.colors.green};
  }
  .stock{
    font-weight: bold;
  }
`;

export { StyledContainer, Title, Price, Wrapper, Infos }