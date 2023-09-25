import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, StatusBar } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { SignIn } from "./src/screens/Sigin";
import { Home } from "./src/screens/Home";
import { Loading } from "./src/components/Loading";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
  },
});
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
      {fontsLoaded ? <Home /> : <Loading />}
    </NativeBaseProvider>
  );
}
