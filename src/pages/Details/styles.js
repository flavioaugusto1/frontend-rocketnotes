import { styled } from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  > h1 {
    color: #FFFFFF;
  }
`;
