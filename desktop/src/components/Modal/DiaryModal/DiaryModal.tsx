import { useModal } from "@/contexts/ModalContext";
import {
  Modal,
  ModalContent,
  CloseModal,
  FormContainer,
  InputField,
  DefectInput,
  ButtonContainer,
} from "../ModalStyle/ModalStyle";
import CloseSvg from "@/assets/HomeIcons/close.svg";
export function DiaryModal() {
  const { toggleDiaryModalVisible } = useModal();
  return (
    <Modal>
      <ModalContent>
        <CloseModal src={CloseSvg} onClick={toggleDiaryModalVisible} />
        <form>
          <h3>Agendar serviço</h3>
          <FormContainer>
            <InputField>
              <label htmlFor="nome">Nome completo: *</label>
              <input type="text" placeholder="Digite o nome do Cliente" />
            </InputField>

            <InputField>
              <label htmlFor="telefone">Telefone: *</label>
              <input type="text" placeholder="Digite o numero do Cliente" />
            </InputField>

            <InputField>
              <label htmlFor="modelo">Modelo:</label>
              <input type="text" placeholder="Digite o modelo do Veiculo" />
            </InputField>

            <InputField>
              <label htmlFor="placa">Placa:</label>
              <input type="text" placeholder="Digite a placa do Veiculo" />
            </InputField>

            <InputField>
              <span>Defeitos Relatados: *</span>
              <DefectInput placeholder="Digite os defeitos" />
            </InputField>

            <InputField>
              <span>Defeitos Encontrados:</span>
              <DefectInput placeholder="Digite os defeitos" />
            </InputField>
          </FormContainer>
          <ButtonContainer>
            <button>Visualizar impressão</button>
            <button>Salvar</button>
          </ButtonContainer>
        </form>
      </ModalContent>
    </Modal>
  );
}
