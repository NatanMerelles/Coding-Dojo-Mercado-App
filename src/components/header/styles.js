import styled from 'styled-components'
import { Input } from '@material-ui/core';

export const StyledHeader = styled.header`
  padding: ${({ theme }) => theme.spacings.mini} 0;
  background: ${({ theme }) => theme.colors.yellow};
`;

export const StyledInput = styled(Input)`
    && {
      &:before {
        display: none;
      }
      
      .MuiInput-input {
        background: ${({ theme }) => theme.colors.white};
        border: none;
        padding: 5px 10px;
        width: 545px;;
      }
    }
`;

export const StyleLogin = styled.div`
  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
