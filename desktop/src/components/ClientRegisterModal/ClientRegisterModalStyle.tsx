import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ClientModal = styled.div`
  background-color: ${theme.colors.blackPrimary};
  padding: 0.8rem 0rem 3.6rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 3;
  input {
    width: 38.8rem;
    border: 2px solid ${theme.colors.orangeSat};
    border-radius: 10px;
    padding: 1.2rem;
  }

  input::placeholder {
    color: ${theme.colors.blackSecondary};
    font-size: 1.8rem;
  }
  h3 {
    color: white;
    font-size: 2.8rem;
    text-align: center;
    text-transform: uppercase;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  label {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1.1rem;
  }
  button {
    color: ${theme.colors.orangeSat};
    text-align: center;
    font-size: 1.8rem;
    padding: 0.8rem;
    background-color: ${theme.colors.blackSat};
    border: 2px solid ${theme.colors.orangeSat};
    border-radius: 10px;
    min-width: 18rem;
    cursor: pointer;
  }
`;
export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(auto, auto);
  gap: 4rem;
  min-width: 38.8rem;
  max-width: 99.4rem;
  justify-items: center;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 4.8rem;
`;

export const CloseModal = styled.img`
  position: absolute;
  top: 5rem;
  right: 10rem;
  cursor: pointer;
`;
