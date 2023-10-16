// Modal context
import { useModal } from "@/contexts/ModalContext";
// Home Style
import {
  HomeWrapper,
  HomeContainer,
  Container,
  AlignContainer,
} from "./HomeStyle";
// Components
import { HomeFunctionContainer } from "@/components/HomeFunctionContainer/HomeFunctionContainer";
import { HomeHeader } from "@/components/HomeHeader/HomeHeader";
import { HomeLeftMenu } from "@/components/HomeLeftMenu/HomeLeftMenu";
import { ClientRegisterModal } from "@/components/Modal/ClientRegisterModal/ClientRegisterModal";
import { EmployeeRegisterModal } from "@/components/Modal/EmployeeRegisterModal/EmployeeRegisterModal";
import { OSModal } from "@/components/Modal/OSModal/OSModal";

// Icons import
import RHImage from "@/assets/HomeFunctionsIcon/RHIcon.svg";
import OrcamentoIcon from "@/assets/HomeFunctionsIcon/OrcamentoIcon.svg";
import OSIcon from "@/assets/HomeFunctionsIcon/OSIcon.svg";
import ConfigIcon from "@/assets/HomeFunctionsIcon/ConfigIcon.svg";
import CarroIcon from "@/assets/HomeFunctionsIcon/CarroIcon.svg";
import RelogioIcon from "@/assets/HomeFunctionsIcon/RelogioIcon.svg";
import AgendaIcon from "@/assets/HomeFunctionsIcon/AgendaIcon.svg";
import OperacionalIcon from "@/assets/HomeFunctionsIcon/OperacionalIcon.svg";
import CarrinhoIcon from "@/assets/HomeFunctionsIcon/CarrinhoIcon.svg";
import FornecedoresIcon from "@/assets/HomeFunctionsIcon/FornecedoresIcon.svg";
import FinanceiroIcon from "@/assets/HomeFunctionsIcon/FinanceiroIcon.svg";
import NotasIcon from "@/assets/HomeFunctionsIcon/NotasIcon.svg";
import { DiaryModal } from "@/components/Modal/DiaryModal/DiaryModal";

export function Home() {
  const {
    isClientModalVisible,
    isEmployeeModalVisible,
    isOSModalVisible,
    isDiaryModalVisible,
  } = useModal();

  return (
    <HomeWrapper>
      {isEmployeeModalVisible ? <EmployeeRegisterModal /> : null}
      {isClientModalVisible ? <ClientRegisterModal /> : null}
      {isOSModalVisible ? <OSModal /> : null}
      {isDiaryModalVisible ? <DiaryModal /> : null}

      <HomeHeader />
      <HomeContainer>
        <HomeLeftMenu />
        <AlignContainer>
          <Container>
            <HomeFunctionContainer
              imageBG={RHImage}
              number={100}
              text="Consultar clientes"
            />
            <HomeFunctionContainer
              imageBG={OrcamentoIcon}
              number={90}
              text="orçamentos"
            />
            <HomeFunctionContainer
              imageBG={OSIcon}
              number={1}
              text="O.S liberada"
            />
            <HomeFunctionContainer
              imageBG={ConfigIcon}
              number={9}
              text="trabalhando agora"
            />
            <HomeFunctionContainer
              imageBG={CarroIcon}
              number={5}
              text="pronto para retirar"
            />
            <HomeFunctionContainer
              imageBG={RelogioIcon}
              number={2}
              text="Aguardando peças"
            />
            <HomeFunctionContainer
              imageBG={AgendaIcon}
              number={40}
              text="agendados"
            />
            <HomeFunctionContainer
              imageBG={OperacionalIcon}
              number={0}
              text="Consultar funcionário"
            />
            <HomeFunctionContainer
              imageBG={CarrinhoIcon}
              number={0}
              text="estoque da loja"
            />
            <HomeFunctionContainer
              imageBG={FornecedoresIcon}
              number={65}
              text="fornecedores"
            />
            <HomeFunctionContainer
              imageBG={FinanceiroIcon}
              number={65}
              text="Fluxo de caixa"
            />
            <HomeFunctionContainer
              imageBG={NotasIcon}
              number={150}
              text="Notas Emitidas"
            />
          </Container>
        </AlignContainer>
      </HomeContainer>
    </HomeWrapper>
  );
}
