import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 28.7rem;
  height: 15rem;
  border-radius: 2rem 2rem 0rem 0rem;
  cursor: pointer;
  position: relative;
  background-color: white;

  &:active {
    background-color: ${theme.colors.orangeSecondary};

    h1 {
      color: black;
    }
    h5 {
      color: black;
    }
  }
  h1 {
    color: ${theme.colors.orangeSat};
    font-size: 3.9rem;
    font-weight: 600;
    text-align: right;
    white-space: nowrap;
  }

  h5 {
    color: ${theme.colors.orangeSat};
    font-size: 1.8rem;
    font-weight: 600;
    text-align: right;
    text-transform: uppercase;
    white-space: nowrap;
  }
  img {
    width: 14.8rem;
    height: 13.3rem;
    position: absolute;
    bottom: 0;
    margin-left: 1rem;
  }

  @media (max-width: 1148px) {
    width: 24rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
  position: absolute;
  bottom: 1.4rem;
  right: 1.4rem;
`;
