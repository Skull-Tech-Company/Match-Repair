import { useModal } from "@/contexts/ModalContext";
import {
  Modal,
  InputField,
  FormContainer,
  CloseModal,
  ButtonContainer,
} from "../Modal/HomeFunctionsModal/ModalStyle";
import CloseSvg from "@/assets/HomeIcons/close.svg";
export function EmployeeRegisterModal() {
  const { toggleEmployeeModalVisibility } = useModal();
  return (
    <Modal>
      <CloseModal
        src={CloseSvg}
        alt=""
        onClick={toggleEmployeeModalVisibility}
      />
      <form action="">
        <h3>Cadastro de funcionários</h3>
        <FormContainer>
          <InputField>
            <label htmlFor="">Nome completo: *</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite o nome do Cliente"
            />
          </InputField>
          <InputField>
            <label htmlFor="">Endereço: *</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite o endereço do Cliente"
            />
          </InputField>
          <InputField>
            <label htmlFor="">Cidade Estado: *</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite a cidade e estado do clente"
            />
          </InputField>
          <InputField>
            <label htmlFor="">Telefone: *</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite o numero do telefone"
            />
          </InputField>
          <InputField>
            <label htmlFor="">RG / CPF: *</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite o numero do RG ou CPF"
            />
          </InputField>
          <InputField>
            <label htmlFor="">Digite o n° da carteira de trabalho</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite o n° da carteira de trabalho"
            />
          </InputField>
          <InputField>
            <label htmlFor="">Admitido em:</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite a data de admição"
            />
          </InputField>
          <InputField>
            <label htmlFor="">Cargo:</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite a função do  funcionário"
            />
          </InputField>
          <InputField>
            <label htmlFor="">Contato de emergencia:</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite o nome de emergencia"
            />
          </InputField>
          <InputField>
            <label htmlFor="">Telefone de emergencia:</label>
            <input type="text" name="" id="" placeholder="Digite o numero" />
          </InputField>
        </FormContainer>
        <ButtonContainer>
          <button>Salvar</button>
        </ButtonContainer>
      </form>
    </Modal>
  );
}
