import { useModal } from "@/contexts/ModalContext";
import {
  ClientModal,
  InputField,
  FormContainer,
  ButtonContainer,
  CloseModal,
} from "./ClientRegisterModalStyle";
import CloseSvg from "@/assets/HomeIcons/close.svg";

export function ClientRegisterModal() {
  const { toggleClientModalVisibility } = useModal();
  return (
    <ClientModal>
      <CloseModal src={CloseSvg} alt="" onClick={toggleClientModalVisibility} />
      <h3>Cadastro de clientes</h3>
      <form action="">
        <FormContainer>
          <InputField>
            <label htmlFor="nome">Nome completo: *</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite o nome do cliente"
            />
          </InputField>
          <InputField>
            <label htmlFor="endereço">Endereço: *</label>
            <input
              id="endereço"
              type="text"
              placeholder="Digite o endereço do Cliente"
            />
          </InputField>
          <InputField>
            <label htmlFor="cidadeEstado">Cidade Estado: *</label>
            <input
              id="cidadeEstado"
              type="text"
              placeholder="Digite a cidade e estado do cliente"
            />
          </InputField>
          <InputField>
            <label htmlFor="telefone">Telefone: *</label>
            <input
              id="telefone"
              type="text"
              placeholder="Digite o numero do telefone"
            />
          </InputField>
          <InputField>
            <label htmlFor="rgCpf">RG / CPF: *</label>
            <input
              id="rgCpf"
              type="text"
              placeholder="Digite o numero do RG ou CPF"
            />
          </InputField>
          <InputField>
            <label htmlFor="email">Email:</label>
            <input id="email" type="text" placeholder="Digite o email" />
          </InputField>
        </FormContainer>
        <h3>Cadastro de veiculo</h3>
        <FormContainer>
          <InputField>
            <label htmlFor="marca">Marca:</label>
            <input
              id="marca"
              type="text"
              placeholder="Digite a marca do Veiculo"
            />
          </InputField>
          <InputField>
            <label htmlFor="modelo">Modelo:</label>
            <input
              id="modelo"
              type="text"
              placeholder="Digite o modelo do Veiculo"
            />
          </InputField>
          <InputField>
            <label htmlFor="ano">Ano:</label>
            <input id="ano" type="text" placeholder="Digite o ano do Veiculo" />
          </InputField>
          <InputField>
            <label htmlFor="placa">Placa:</label>
            <input
              id="placa"
              type="text"
              placeholder="Digite a placa do Veiculo"
            />
          </InputField>
        </FormContainer>
        <ButtonContainer>
          <button>Adicionar Veiculo</button>
          <button>Salvar</button>
        </ButtonContainer>
      </form>
    </ClientModal>
  );
}
