import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Menu = styled.div`
  height: 100%;
  width: 100%;
  max-width: 18rem;
  background-color: ${theme.colors.orangePrimary};
  color: white;
  padding: 0.75rem 1.2rem 3rem 1.2rem;

  button {
    background-color: ${theme.colors.orangePrimary};
    border-radius: 0rem 1.7rem 1.7rem 0rem;
    height: 100%;
    width: 100%;
    color: white;
    font-size: 1.8rem;
    text-align: left;
  }

  button:hover {
    background-color: white;
    color: ${theme.colors.orangeSat};
  }
`;

export const Container = styled.div`
  background-color: ${theme.colors.orangePrimary};
  border: 2px solid white;
  border-radius: 2rem;
  width: 16.03rem;
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 1.04rem;
  padding-left: 0.6rem;
  margin-bottom: 1.6rem;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.7);
  cursor: pointer;
`;
