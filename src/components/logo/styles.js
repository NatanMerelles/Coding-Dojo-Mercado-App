import styled, { css } from 'styled-components'

export const Logo = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-weight: ${theme.font.semi};
    font-size: ${theme.font.sizes.small};
  `}
`;