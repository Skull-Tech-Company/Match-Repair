import React, { useState, useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";
import { ImageBackground } from "react-native";
import { Box, Center, Container, Pressable, Text } from "native-base";
import { THEME } from "../styles/theme";
import Lupa from "../assets/icons/Lupa.svg";
import Email from "../assets/icons/Email.svg";
import SinoDuplo from "../assets/icons/SinoDuplo.svg";
import MenuHamburguer from "../assets/icons/MenuHamburguer.svg";
import ArrowDown from "../assets/icons/arrowDown.svg";
import { LeftMenu } from "./LeftMenu";

export function HomeHeader() {
  const { toggleMenu, isMenuOpen } = useContext(MenuContext);

  const profileIcon = require("../assets/ProfileIcon.png");
  return (
    <Center
      backgroundColor={THEME.colors.orange[300]}
      borderBottomRadius={50}
      flex={1}
      shadow={9}
      paddingTop={4}
      marginBottom={44}
    >
      {/* Container com parte superior do header, menu, usuario e icone. */}

      <Container
        flexDirection={"row"}
        alignItems={"center"}
        style={{ justifyContent: "space-between", gap: 5 }}
        flex={1}
      >
        {/* Menu lateral */}
        <Pressable marginLeft={-26} marginRight={15} onPress={toggleMenu}>
          <MenuHamburguer />
          {isMenuOpen ? <LeftMenu /> : null}
        </Pressable>
        {/* Container usuario */}
        <Container
          backgroundColor={"whitesmoke"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          height={66}
          width={262}
          borderRadius={20}
          borderColor={THEME.colors.orange[100]}
          borderWidth={4}
          alignItems={"center"}
          padding={17}
        >
          {/* Adicionar Pressable e menu do usuario */}
          <ArrowDown />

          {/* Container para alinhar os textos */}
          <Container style={{ alignItems: "flex-end" }}>
            <Text
              color={THEME.colors.orange[300]}
              fontWeight={700}
              fontSize={18}
            >
              Luiza Pereira
            </Text>
            <Text fontWeight={700}>Financeiro</Text>
          </Container>
          {/* Fechamento container alinhar textos */}
        </Container>

        {/* Icone usuario */}
        <ImageBackground source={profileIcon} height={66} width={66}>
          <Container height={66} width={66}></Container>
        </ImageBackground>
      </Container>

      {/* Fechamento container parte supeiror */}

      {/* Container inferior contendo as funçoes de mensagem, notificação e pesquisa */}
      <Container
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        width={300}
        style={{ gap: 20 }}
        paddingBottom={3}
        marginRight={-10}
        marginTop={3}
      >
        <Pressable>
          <Email />
        </Pressable>
        <Pressable>
          <SinoDuplo />
        </Pressable>
        <Pressable>
          <Lupa />
        </Pressable>
      </Container>
      {/* Fechamento container inferior */}
    </Center>
  );
}
