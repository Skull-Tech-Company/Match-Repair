import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Button = styled.button<{ $primary?: boolean }>`
  width: 25rem;
  height: 4.3rem;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background: ${theme.colors.orangeSat};
  text-transform: uppercase;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: ${theme.colors.orangeSat};
    border: 2px solid ${theme.colors.orangeSat};
  }
`;
