import React, { useContext, useState } from "react";

import { HomeHeader } from "../components/HomeHeader";
import { FunctionContainer } from "../components/FunctionContainer";
import { Pressable, ScrollView } from "native-base";
import { MenuContext, MenuProvider } from "../contexts/MenuContext";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
  const { toggleMenu, isMenuOpen } = useContext(MenuContext);

  return (
    <SafeAreaView>
      <ScrollView backgroundColor={"#EBEBEB"}>
        <MenuProvider>
          <HomeHeader />
          <Pressable onPress={toggleMenu}>
            <FunctionContainer
              number={200}
              title="consultar cliente"
              iconSource={require("../assets/icons/RH.png")}
            />
            <FunctionContainer
              number={90}
              title="Orçamento"
              iconSource={require("../assets/icons/ORÇAMENTO.png")}
            />
            <FunctionContainer
              number={1}
              title="O.S Liberada"
              iconSource={require("../assets/icons/OSLiberada.png")}
            />
            <FunctionContainer
              number={9}
              title="Trabalhando Agora"
              iconSource={require("../assets/icons/TrabalhandoAgora.png")}
            />
            <FunctionContainer
              number={5}
              title="Pronto para retirar"
              iconSource={require("../assets/icons/Carro.png")}
            />
            <FunctionContainer
              number={2}
              title="Agurdando peças"
              iconSource={require("../assets/icons/Aguardando.png")}
            />
            <FunctionContainer
              number={40}
              title="Agendados"
              iconSource={require("../assets/icons/Agenda.png")}
            />
            <FunctionContainer
              number={0}
              title="Consultar funcionário"
              iconSource={require("../assets/icons/Operacional.png")}
            />
            <FunctionContainer
              number={0}
              title="Estoque da loja"
              iconSource={require("../assets/icons/AdicionarCarrinho.png")}
            />
            <FunctionContainer
              number={65}
              title="Fornecedor"
              iconSource={require("../assets/icons/Truck.png")}
            />
            <FunctionContainer
              number={0}
              title="Fluxo de caixa"
              iconSource={require("../assets/icons/Financeiro.png")}
            />
            <FunctionContainer
              number={150}
              title="Notas emitidas"
              iconSource={require("../assets/icons/Notas.png")}
            />
          </Pressable>
        </MenuProvider>
      </ScrollView>
    </SafeAreaView>
  );
}
