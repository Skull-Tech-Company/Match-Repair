import React, { useState } from "react";

import {
  Button,
  Center,
  Container,
  Checkbox,
  FormControl,
  Input,
  Text,
  Icon,
  Pressable,
} from "native-base";

import Perso from "../assets/icons/perso.svg";
import Cad from "../assets/icons/cad.svg";
import EyeOn from "../assets/icons/eye.svg";
import EyeOff from "../assets/icons/eyeOff.svg";
import { AlertMessage } from "./AlertMessage";

import { THEME } from "../styles/theme";
import { AlertEmailSend } from "./AlertEmailSend";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Center>
      <Container
        borderRadius={50}
        width={366}
        style={{
          backgroundColor: "rgba(255,255,255, 0.6)",
        }}
      >
        {/* <AlertEmailSend title="Enviamos um link de redefinição de senha para o e-mail xxxxxx@xxxxx.com" /> */}

        {/* <AlertMessage
          title={"Deseja alterar sua senha?"}
          text={
            "Clique em vol tar para cancelar ou redefinir para alterar a senha"
          }
          onPress={() => console.log("oi")}
        /> */}
        <FormControl isRequired marginTop={10}>
          <Container
            height={52}
            width={320}
            marginBottom={29}
            marginX={7}
            alignItems="center"
            flexDirection="row"
            borderWidth={2}
            borderColor={THEME.colors.orange[300]}
            rounded={7}
            bgColor={THEME.colors.orange[40]}
          >
            <Perso style={{ margin: 5 }} aria-label="Person icon" />
            <Input
              aria-label="Campo de usuario para fazer login"
              type="text"
              backgroundColor="white"
              placeholder="John Smith"
              placeholderTextColor={THEME.colors.orange[200]}
              style={{ fontWeight: "bold", fontSize: 20 }}
              maxWidth={"container"}
              maxHeight={"container"}
              padding={2.5}
              flex={1}
              // Border
              borderColor={THEME.colors.orange[200]}
              borderLeftWidth={2}
              borderTopWidth={0}
              borderRightWidth={0}
              borderBottomWidth={0}
            />
          </Container>

          <Container
            height={52}
            width={320}
            marginBottom={3}
            marginX={7}
            alignItems="center"
            flexDirection="row"
            borderWidth={2}
            borderColor={THEME.colors.orange[300]}
            rounded={7}
            bgColor={THEME.colors.orange[40]}
          >
            <Cad
              height={30}
              width={30}
              style={{ margin: 5 }}
              aria-label="icone de cadeado no campo de senha"
            />
            <Input
              aria-label="campo de senha para fazer login"
              type={showPassword ? "text" : "password"}
              backgroundColor="white"
              color={THEME.colors.orange[200]}
              placeholder="******"
              placeholderTextColor={THEME.colors.orange[200]}
              style={{ fontWeight: "bold", fontSize: 20 }}
              maxWidth={"container"}
              maxHeight={"container"}
              padding={2.5}
              flex={1}
              // Border
              borderColor={THEME.colors.orange[200]}
              borderLeftWidth={2}
              borderTopWidth={0}
              borderRightWidth={0}
              borderBottomWidth={0}
              InputRightElement={
                <Icon
                  aria-label="Icone com olho desativado, toque para ativar visualização"
                  as={
                    showPassword ? (
                      <EyeOn width={20} height={20} />
                    ) : (
                      <EyeOff width={20} height={20} />
                    )
                  }
                  onPress={togglePasswordVisibility}
                  size={5}
                  mr="2"
                />
              }
            />
          </Container>

          <Container flexDirection={"row"} marginX={7}>
            <Checkbox
              colorScheme="orange"
              value="false"
              borderRadius={50}
              borderColor={THEME.colors.orange[300]}
              borderWidth={3}
              marginRight={2}
            />
            <Text color={THEME.colors.orange[200]} fontWeight="bold">
              Lembrar de mim
            </Text>
          </Container>
          <Container
            justifyContent="center"
            alignItems="center"
            marginX={10}
            marginTop={9}
          >
            <Button
              bgColor={THEME.colors.orange[300]}
              width={200}
              height={41}
              onPress={() => console.log("hello button")}
            >
              <Text color={"white"} fontWeight={700}>
                ACESSAR
              </Text>
            </Button>
            {/* Forget password */}
            <Pressable onPress={() => console.log("hello button")}>
              <Text
                color={THEME.colors.orange[200]}
                fontWeight="bold"
                marginTop={3}
                paddingBottom={3}
              >
                Esqueceu a senha? Clique aqui
              </Text>
            </Pressable>
          </Container>
        </FormControl>
      </Container>
    </Center>
  );
}
