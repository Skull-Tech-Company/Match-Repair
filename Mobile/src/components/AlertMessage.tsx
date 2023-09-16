import { Alert, Button, Text } from "native-base";
import { THEME } from "../styles/theme";

interface Props {
  title: string;
  text: string;
  onPress: () => void;
}

export function AlertMessage({ title, text, onPress }: Props) {
  return (
    <Alert backgroundColor={"white"} borderRadius={50} width={300} height={300}>
      <Text
        color={THEME.colors.red[200]}
        fontWeight={"700"}
        textAlign={"center"}
        fontSize={26}
        marginBottom={9}
      >
        {title}
      </Text>
      <Text
        color={THEME.colors.red[200]}
        fontWeight={"600"}
        textAlign={"center"}
        fontSize={16}
        marginBottom={10}
      >
        {text}
      </Text>
      <Button
        backgroundColor={THEME.colors.red[200]}
        width={168}
        height={62}
        onPress={onPress}
      >
        <Text color={"white"} fontWeight={"600"}>
          REDEFINIR
        </Text>
      </Button>
    </Alert>
  );
}
