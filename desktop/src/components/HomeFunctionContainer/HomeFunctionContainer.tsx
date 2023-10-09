import { Container, TextContainer } from "./HomeFunctionContainerStyle";

interface Props {
  number: number;
  text: string;
  imageBG: string;
}
export function HomeFunctionContainer({ number, text, imageBG }: Props) {
  return (
    <Container>
      <img src={imageBG} alt="" />
      <TextContainer>
        <h1>{number}</h1>
        <h5>{text}</h5>
      </TextContainer>
    </Container>
  );
}
