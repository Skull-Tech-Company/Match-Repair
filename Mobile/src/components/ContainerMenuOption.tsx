import { ImageBackground, ImageURISource } from "react-native";
import { Pressable, Text } from "native-base";

interface Props {
  text: string;
  iconSource: ImageURISource;
  menuFunction: () => void;
}

export function ContainerMenuOption({ text, iconSource, menuFunction }: Props) {
  return (
    <Pressable
      flexDirection={"row"}
      alignItems={"center"}
      borderStyle={"solid"}
      borderWidth={2}
      borderColor={"white"}
      borderRadius={20}
      height={75}
      maxW={300}
      width={200}
      marginBottom={4}
      onPress={menuFunction}
    >
      <ImageBackground
        source={iconSource}
        style={{ height: 30, width: 30, marginLeft: 6 }}
      />
      <Text
        fontSize={18}
        color={"white"}
        fontWeight={600}
        paddingLeft={3}
        textAlign={"left"}
      >
        {text}
      </Text>
    </Pressable>
  );
}
