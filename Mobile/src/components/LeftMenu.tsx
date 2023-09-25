import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Modal } from "native-base";
import { ContainerMenuOption } from "./ContainerMenuOption";
import { THEME } from "../styles/theme";
import { MenuContext } from "../contexts/MenuContext";
import { ScrollView } from "react-native";

export function LeftMenu() {
  const { toggleMenu, isMenuOpen } = useContext(MenuContext);

  return (
    <Modal
      isOpen={isMenuOpen}
      onClose={() => toggleMenu()}
      alignItems={"flex-start"}
    >
      {" "}
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <Box
            backgroundColor={THEME.colors.orange[200]}
            width={303}
            paddingLeft={8}
            paddingY={16}
            paddingRight={113}
            borderColor={"white"}
            borderStyle={"solid"}
            borderWidth={4}
            borderTopRightRadius={40}
            left={0}
          >
            <ContainerMenuOption
              text="Inicio"
              iconSource={require("../assets/icons/Home.png")}
              menuFunction={toggleMenu}
            />
            <ContainerMenuOption
              text="Clientes"
              iconSource={require("../assets/icons/RHMenu.png")}
              menuFunction={() => console.log("oi")}
            />
            <ContainerMenuOption
              text="Orçamento"
              iconSource={require("../assets/icons/OrcamentoMenu.png")}
              menuFunction={() => console.log("oi")}
            />
            <ContainerMenuOption
              text="O.S"
              iconSource={require("../assets/icons/OSMenu.png")}
              menuFunction={() => console.log("oi")}
            />
            <ContainerMenuOption
              text="Veiculos"
              iconSource={require("../assets/icons/CarroMenu.png")}
              menuFunction={() => console.log("oi")}
            />
            <ContainerMenuOption
              text="Agenda"
              iconSource={require("../assets/icons/AgendaMenu.png")}
              menuFunction={() => console.log("oi")}
            />
            <ContainerMenuOption
              text="funcionários"
              iconSource={require("../assets/icons/FuncionariosMenu.png")}
              menuFunction={() => console.log("oi")}
            />
            <ContainerMenuOption
              text="Financeiro"
              iconSource={require("../assets/icons/FinanceiroMenu.png")}
              menuFunction={() => console.log("oi")}
            />
            <ContainerMenuOption
              text="Fiscal"
              iconSource={require("../assets/icons/NotaMenu.png")}
              menuFunction={() => console.log("oi")}
            />
          </Box>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}
