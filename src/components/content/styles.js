import styled, { css } from 'styled-components'

import { Container, Grid } from '@material-ui/core';

const StyledContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  margin-top: 35px;
`;

const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight:  ${theme.font.normal};
    line-height: 1.5;
  `}
`;

const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};

    p {
      font-size: ${theme.font.sizes.mini};
      font-weight:  ${theme.font.semi};
    }

    ul {
      padding: 0;
      margin-top: ${theme.spacings.mini};

      li {
        list-style: inside;
        font-size: ${theme.font.sizes.mini};
        margin: 8px 0;
      }
    }
  `}
`;

const Price = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    display: block;
    margin-top: ${theme.spacings.mini};
  `}
`;

const Infos = styled(Grid)`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 20px;
  border-radius: 10px;
  width: 100%;

  .prediction {
    color: ${({ theme }) => theme.colors.green};
  }

  .stock {
    font-weight: bold;
  }
`;

export { StyledContainer, Title, Price, Wrapper, Infos };