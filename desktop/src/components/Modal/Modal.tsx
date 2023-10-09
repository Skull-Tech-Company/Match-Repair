import { ModalStyled, ModalCloseBtn } from "./ModalStyles";

interface Props {
  title?: string;
  text?: string;
  hasButton?: boolean;
  textButton?: string;
  textmodalcolor: string;
  modalCloseBtn: () => void;
  modalButtonFunction?: () => void;
}

export function Modal({
  title,
  text,
  hasButton,
  textmodalcolor,
  textButton,
  modalCloseBtn,
  modalButtonFunction,
}: Props) {
  return (
    <ModalStyled textmodalcolor={textmodalcolor}>
      <ModalCloseBtn onClick={modalCloseBtn}>
        <svg
          width="24"
          height="30"
          viewBox="0 0 24 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 2L4 15.963L22 28" stroke="#FF1F00" strokeWidth="4" />
        </svg>
      </ModalCloseBtn>
      <h3>{title}</h3>
      <p>{text}</p>
      {hasButton ? (
        <button onClick={modalButtonFunction}>{textButton}</button>
      ) : null}
    </ModalStyled>
  );
}
