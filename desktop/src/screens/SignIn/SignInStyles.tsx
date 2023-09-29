import { theme } from "@/styles/theme";
import styled, { css } from "styled-components";
import backgroundImage from "../../assets/Background.png";
import logoImage from "../../assets/logo.png";

export const BgImg = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  height: 100vh;
`;

export const Logo = styled.div`
  background-image: url(${logoImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 38rem;
  height: 33rem;
  margin-bottom: 9rem;
`;
// *** Form estilizado  ***
export const StyledForm = styled.form`
  background-color: #ffffffa4;

  border-radius: 50px;
  height: 37rem;
  padding: 2rem 2.3rem 2.6rem 2.3rem;
`;
// *** divs alinhamento ***
export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RowDiv = styled.div<{ $startLeft?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: 2px solid ${theme.colors.orangeSat};
  margin-top: 3rem;

  ${(props) =>
    props.$startLeft &&
    css`
      justify-content: flex-start;
      margin-top: 1.3rem;
      margin-bottom: 4rem;
      border: none;
    `}
`;
// *** inputs ***

// *** div com svg do input ***
export const DivSvg = styled.div`
  background-color: #ffd7b2;

  border-radius: 8px 0px 0px 8px;
  border: 2px solid ${theme.colors.orangeSat};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// *** Input de login e senha ***
export const InputField = styled.input<{ $haveIcon?: boolean }>`
  background-color: white;
  color: ${theme.colors.orangePrimary};
  font-size: 2.4rem;
  width: 34rem;
  height: 5.4rem;
  border-radius: 0px 10px 10px 0px;
  border: 1px solid transparent;
  border-left: none;
  font-weight: 600;
  outline: none;
  padding-left: 1.3rem;
  &::placeholder {
    color: ${theme.colors.orangePrimary};
  }
  ${(props) =>
    props.$haveIcon &&
    css`
      position: relative;

      img {
        position: absolute;
        top: 50%;
        right: 10px; /* Ajuste a posição do ícone conforme necessário */
        transform: translateY(-50%);
        cursor: pointer;
      }
    `}
`;

export const RadioInput = styled.input`
  appearance: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 3px solid ${theme.colors.orangeSat};
  cursor: pointer;
  position: relative;
  background-color: white;

  &:checked {
    background-color: ${theme.colors
      .orangeSecondary}; /* Fundo branco quando marcado */

    &::after {
      content: "";
      width: 1.5rem; /* Tamanho da bola preta */
      height: 1.5rem; /* Tamanho da bola preta */
      background-color: #000; /* Cor da bola preta */
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

// *** div para alinhar input com icon por cima ***
export const InputWithIcon = styled.div`
  position: relative;

  img {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
// *** texto lembrar de mim ***
export const MediumText = styled.p`
  margin-left: 1.3rem;
  font-size: 1.8rem;
  color: ${theme.colors.orangePrimary};
  font-weight: 600;
  opacity: 0.8;
`;
// *** texto de esqueceu a senha com hover  ***
export const ForgotPassWordLink = styled.a`
  color: ${theme.colors.orangeSat};
  cursor: pointer;
  opacity: 0.8;
  display: flex;
  font-size: 1.4rem;
  margin-top: 2rem;
  font-weight: 700;

  p {
    margin-left: 0.3rem;
  }
  &:hover {
    opacity: 1;
    p {
      color: black;
      font-weight: 700;
    }
  }
`;
