import { styled } from "styled-components";


export const Container = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: none;
  border: 1rem;

  padding: 2.2rem;
  margin-bottom: 1.6rem;

  border-radius: 1rem;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer{
    width: 100%;
    display: flex;
    margin: 2.4rem 0;
  }
`;