import { Alert, Text } from "native-base";
import { THEME } from "../styles/theme";

interface Props {
  title: string;
}

export function AlertEmailSend({ title }: Props) {
  return (
    <Alert
      backgroundColor={"white"}
      borderRadius={50}
      width={300}
      height={300}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text
        color={THEME.colors.red[200]}
        fontWeight={600}
        fontSize={20}
        textAlign={"center"}
      >
        {title}
      </Text>
    </Alert>
  );
}
