import Styled from 'styled-components';

export const StyledHeader = Styled.div`
  padding: ${({ theme }) => theme.spacings.mini} 0;
  background: ${({ theme }) => theme.colors.yellow};
`;