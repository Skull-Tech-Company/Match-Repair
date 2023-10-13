import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  width: 100%;
  scrollbar-width: thin; /* Para navegadores Firefox */
  scrollbar-color: ${theme.colors.orangeSat} transparent; /* Para navegadores Firefox */
  &::-webkit-scrollbar {
    width: 12px; /* Largura da barra de rolagem para navegadores WebKit (Chrome, Safari) */
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.orangeSat};
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const Modal = styled.div`
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
  overflow-y: auto;
  max-height: 70vh;
  input {
    width: 38.8rem;
    border: 2px solid ${theme.colors.orangeSat};
    border-radius: 10px;
    padding: 1.2rem;
    outline: none;
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
  right: 6rem;
  cursor: pointer;
`;

export const DefectInput = styled.textarea`
  padding: 1rem;
  border: 2px solid ${theme.colors.orangeSat};
  border-radius: 1rem;
  background-color: white;
  width: 38.8rem;
  height: 21rem;
  resize: none;
  outline: none;
`;

export const DefectContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 4rem;
  min-width: 38.8rem;
  max-width: 99.4rem;
  justify-items: center;
  justify-content: center;
  align-items: center;
`;

export const OSProd = styled.div`
  display: flex;
  max-width: 88rem;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 4rem;

  input {
    width: 25rem;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  span {
    color: white;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 1rem;
  }
`;
