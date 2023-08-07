import { styled } from "styled-components";

export const Container = styled.span `
  font-size: 1.2rem;
  padding: .5rem 1.4rem;
  border-radius: 5px;
  margin-right: .6rem;

  background: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  &:hover{
    cursor: default;
    filter: brightness(0.9);
  }
`;