import React from "react";

import { ImageBackground } from "react-native";
import Logo from "../assets/logo.svg";
import { LoginForm } from "../components/LoginForm";

export function SignIn() {
  const gradientColors = [
    "#F69430",
    "#F14E29",
    "#F3632B",
    "#F5832F",
    "#F58220",
  ]; // Adicione as cores que desejar
  const gradientStops = [0, 0.4, 0.6, 0.9, 1]; // Posições das cores correspondentes

  const bgImg = require("../assets/loginBG2.png");

  return (
    <ImageBackground source={bgImg} resizeMode="stretch" style={{ flex: 1 }}>
      <Logo
        aria-label="Logo match repair"
        width={300}
        height={296}
        style={{
          marginTop: 60,
          marginBottom: 10,
          marginLeft: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <LoginForm />
    </ImageBackground>
  );
}
