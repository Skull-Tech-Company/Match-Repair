import { Menu, Container } from "./HomeLeftMenuStyles";
import HomeIcon from "@/assets/HomeIcons/Home.svg";
import RHIcon from "@/assets/HomeIcons/RH.svg";
import OrcamentoIcon from "@/assets/HomeIcons/Orcamento.svg";
import OSIcon from "@/assets/HomeIcons/OSIcon.svg";
import CarroIcon from "@/assets/HomeIcons/CarroIcon.svg";
import AgendaIcon from "@/assets/HomeIcons/AgendaIcon.svg";
import FuncionarioIcon from "@/assets/HomeIcons/FuncionarioIcon.svg";
import EstoqueIcon from "@/assets/HomeIcons/EstoqueIcon.svg";
import FinanceiroIcon from "@/assets/HomeIcons/FinanceiroIcon.svg";
import FiscalIcon from "@/assets/HomeIcons/FiscalIcon.svg";

export function HomeLeftMenu() {
  return (
    <Menu>
      <Container>
        <img src={HomeIcon} alt="" />
        <button>Inicio</button>
      </Container>
      <Container>
        <img src={RHIcon} alt="" />
        <button>Clientes</button>
      </Container>

      <Container>
        <img src={OrcamentoIcon} alt="" />
        <button>Orçamento</button>
      </Container>

      <Container>
        <img src={OSIcon} alt="" />
        <button>O.S.</button>
      </Container>
      <Container>
        <img src={CarroIcon} alt="" />
        <button>Veiculos</button>
      </Container>
      <Container>
        <img src={AgendaIcon} alt="" />
        <button>Agenda</button>
      </Container>
      <Container>
        <img src={FuncionarioIcon} alt="" />
        <button>Funcionarios</button>
      </Container>
      <Container>
        <img src={EstoqueIcon} alt="" />
        <button>Estoque</button>
      </Container>
      <Container>
        <img src={FinanceiroIcon} alt="" />
        <button>Financeiro</button>
      </Container>
      <Container>
        <img src={FiscalIcon} alt="" />
        <button>Fiscal</button>
      </Container>
    </Menu>
  );
}
