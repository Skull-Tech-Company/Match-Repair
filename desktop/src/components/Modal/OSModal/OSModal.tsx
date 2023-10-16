import { useModal } from "@/contexts/ModalContext";
import {
  Modal,
  ButtonContainer,
  CloseModal,
  FormContainer,
  InputField,
  DefectInput,
  ModalContent,
  DefectContainer,
  OSProd,
} from "../ModalStyle/ModalStyle";
import CloseSvg from "@/assets/HomeIcons/close.svg";
export function OSModal() {
  const { toggleOSModalVisibility } = useModal();
  return (
    <Modal>
      <ModalContent>
        <CloseModal
          src={CloseSvg}
          onClick={toggleOSModalVisibility}
          alt="Fechar janela ordem de serviço"
        />
        <h3>ORDEM DE SERVIÇO</h3>
        <FormContainer>
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

            <h3>Informações do veiculo</h3>

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
                <input
                  id="ano"
                  type="text"
                  placeholder="Digite o ano do Veiculo"
                />
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

            <DefectContainer>
              <InputField>
                <label htmlFor="DefectRelated">Defeitos Relatados: *</label>
                <DefectInput id="DefectRelated" />
              </InputField>

              <InputField>
                <label htmlFor="DefectFound">Defeitos Encontrados:</label>
                <DefectInput id="DefectFound" />
              </InputField>
            </DefectContainer>

            <OSProd>
              <div>
                <span>Descrição:</span>
                <input type="text" name="" id="descricao" />
              </div>

              <div>
                <span>Quantidade:</span>
                <input type="number" name="" id="quantidade" />
              </div>

              <div>
                <span>VR UNIT.:</span>
                <input type="number" name="" id="valorUnidade" />
              </div>
            </OSProd>

            <ButtonContainer>
              <button>Visualizar impressão</button>
              <button>Salvar</button>
            </ButtonContainer>
          </form>
        </FormContainer>
      </ModalContent>
    </Modal>
  );
}
