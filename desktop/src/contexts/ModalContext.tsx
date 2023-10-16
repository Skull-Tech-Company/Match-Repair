import { createContext, useContext, useState } from "react";

export const ModalContext = createContext({
  isClientModalVisible: false,
  isEmployeeModalVisible: false,
  isOSModalVisible: false,
  isDiaryModalVisible: false,
  isRegisterProductModalVisible: false,
  toggleClientModalVisibility: () => {},
  toggleEmployeeModalVisibility: () => {},
  toggleOSModalVisibility: () => {},
  toggleDiaryModalVisible: () => {},
  toggleRegisterProductModalVisible: () => {},
});

export function ModalProvider({ children }) {
  // State dos modais
  const [isClientModalVisible, setIsClientModalVisible] = useState(false);
  const [isEmployeeModalVisible, setIsEmployeeModalVisible] = useState(false);
  const [isOSModalVisible, setIsOSModalVisible] = useState(false);
  const [isDiaryModalVisible, setIsDiaryModalVisible] = useState(false);
  const [isRegisterProductModalVisible, setIsRegisterProductModalVisible] =
    useState(false);

  // Funçoes para fechar modal
  const toggleClientModalVisibility = () => {
    setIsClientModalVisible((prev) => !prev);
  };
  const toggleEmployeeModalVisibility = () => {
    setIsEmployeeModalVisible((prev) => !prev);
  };
  const toggleOSModalVisibility = () => {
    setIsOSModalVisible((prev) => !prev);
  };
  const toggleDiaryModalVisible = () => {
    setIsDiaryModalVisible((prev) => !prev);
  };
  const toggleRegisterProductModalVisible = () => {
    setIsRegisterProductModalVisible((prev) => !prev);
  };

  return (
    <ModalContext.Provider
      value={{
        isClientModalVisible,
        toggleClientModalVisibility,
        isEmployeeModalVisible,
        toggleEmployeeModalVisibility,
        isOSModalVisible,
        toggleOSModalVisibility,
        isDiaryModalVisible,
        toggleDiaryModalVisible,
        isRegisterProductModalVisible,
        toggleRegisterProductModalVisible,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  return useContext(ModalContext);
};
