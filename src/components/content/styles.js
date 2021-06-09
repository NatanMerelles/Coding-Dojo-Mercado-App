import styled, { css } from 'styled-components'

import { Container, Grid } from '@material-ui/core';

export const StyledContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  margin-top: 35px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight:  ${theme.font.normal};
    line-height: 1.5;
  `}
`;

export const Wrapper = styled.div`
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

export const Price = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    display: block;
    margin-top: ${theme.spacings.mini};
  `}
`;

export const Infos = styled(Grid)`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray};
    height: 100%;
    padding: 20px;
    border-radius: 10px;

    .prediction {
      color: ${theme.colors.green};
      line-height: 1.5;
      font-weight: ${theme.font.bold};
    }

    .stock {
      font-weight: ${theme.font.bold};
      margin: ${theme.spacings.small} 0;
    }

    .amount {
      margin-bottom: ${theme.spacings.small};

      input {
        background: #EDEDED;
        border: none;
        flex-basis: 104px;
        max-width: 104px;
        border-radius: 10px;
        margin-left: ${theme.spacings.small};
        padding: ${theme.spacings.mini};
        font-weight: ${theme.font.bold};
      }
    }

    .buttons {
      button {
        padding: ${theme.spacings.mini};
        border-radius: 10px;

        &:first-child {
          margin-bottom: ${theme.spacings.mini};
        }
      }
    }
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} 0;
    margin: ${theme.spacings.mini} 0;
    border-top: 1px solid #00000020;

    h3 {
      margin-bottom: ${theme.spacings.small};
      color: ${theme.colors.black};
    }

    p {
      line-height: 1.5;

      &:first-child {
        margin: 0 0 ${theme.spacings.mini};
      }
    }
  `}
`;


// export { StyledContainer, Title, Price, Wrapper, Infos, Description };