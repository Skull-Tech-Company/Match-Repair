import React from "react";
import { ImageBackground, ImageURISource } from "react-native";
import { Text, Container, Box } from "native-base";
import { THEME } from "../styles/theme";

interface Props {
  number: number;
  title: string;
  iconSource: ImageURISource;
}

export function FunctionContainer({ number, title, iconSource }: Props) {
  return (
    <Box
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      style={{ zIndex: -1 }}
    >
      <Container
        width={287}
        height={150}
        backgroundColor={"white"}
        borderRadius={20}
        justifyContent={"flex-end"}
        overflow={"hidden"}
        marginTop={4}
      >
        <ImageBackground
          source={iconSource}
          resizeMode="contain"
          style={{ width: 148, height: 133, marginLeft: 10, marginBottom: 1 }}
        />

        <Container
          flex={1}
          maxWidth={"inerheit"}
          width={270}
          position={"absolute"}
          alignItems={"flex-end"}
        >
          <Text fontSize={39} color={THEME.colors.orange[300]} fontWeight={700}>
            {number}
          </Text>

          <Text
            fontSize={18}
            color={THEME.colors.orange[300]}
            fontWeight={700}
            textTransform={"uppercase"}
            marginTop={-2}
            marginBottom={14}
          >
            {title}
          </Text>
        </Container>
      </Container>
    </Box>
  );
}
