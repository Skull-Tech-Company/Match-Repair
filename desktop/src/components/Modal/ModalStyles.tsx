import styled from "styled-components";

interface ModalProps {
  textmodalcolor: string;
}

export const ModalStyled = styled.div<ModalProps>`
  position: absolute;
  background-color: whitesmoke;
  width: 30rem;
  height: 35rem;
  padding: 0rem 4rem;
  border-radius: 5rem;
  opacity: 0.94;
  color: ${(props) => props.textmodalcolor};
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  justify-content: center;
  align-items: center;

  h3 {
    font-weight: 700;
    font-size: 2.8rem;
    margin-bottom: 3.8rem;
  }

  button {
    margin-top: 6rem;
    width: 18rem;
    height: 4rem;
    color: red;
    align-items: center;
    border-radius: 1rem;
    border: 2px solid red;
    font-weight: 600;
    cursor: pointer;
  }
  button:hover {
    background-color: #cccccc;
  }
  p {
    font-size: 1.6rem;
    font-weight: 600;
    padding: 0rem 2rem;
  }
`;

export const ModalCloseBtn = styled.a`
  position: absolute;
  top: 2rem;
  right: 4rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
