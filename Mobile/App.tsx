import { NativeBaseProvider, StatusBar } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { SignIn } from "./src/screens/Sigin";
import { Loading } from "./src/components/Loading";

import React from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" backgroundColor="black" translucent />
      {/* Verifica se a fonte está carregada, se estiver vai para a tela de login caso contrario fica em loading */}
      {fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  );
}
