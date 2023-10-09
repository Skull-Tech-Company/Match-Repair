import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Header = styled.header`
  background-color: ${theme.colors.orangePrimary};
  width: 100%;
  height: 18.6rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const LogoAlign = styled.div`
  background-color: ${theme.colors.blackSecondary};
  width: 20.4rem;
  height: 18.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserMenu = styled.div`
  position: relative;
  background-color: #fff5ec;
  width: 262.395px;
  height: 66px;
  border: 4px solid ${theme.colors.orangeSecondary};
  border-radius: 20px;

  h4 {
    color: ${theme.colors.orangeSat};
    text-align: right;
    font-size: 2.4rem;
    margin-top: 1rem;
    margin-right: 1.7rem;
  }

  p {
    color: ${theme.colors.blackSat};
    text-align: right;
    font-size: 1.6rem;
    font-weight: 700;
    margin-right: 1.7rem;
  }

  svg {
    width: 2.1rem;
    height: 1.2rem;
    position: absolute;
    top: 2.6rem;
    left: 1.7rem;
    cursor: pointer;
  }
`;

export const HeaderFunctions = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.9rem;
  margin-right: 2.4rem;
`;

export const UserImage = styled.img`
  border: 4px solid white;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  margin-left: 1rem;
`;

export const FunctionsAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
`;

export const UserContainer = styled.div`
  display: flex;
  margin-right: 5rem;
  margin-bottom: 1.7rem;
`;
