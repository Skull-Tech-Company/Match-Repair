import { createContext, useContext, useState } from "react";

export const ModalContext = createContext({
  isClientModalVisible: false,
  isEmployeeModalVisible: false,
  isOSModalVisible: false,
  toggleClientModalVisibility: () => {},
  toggleEmployeeModalVisibility: () => {},
  toggleOSModalVisibility: () => {},
});

export function ModalProvider({ children }) {
  const [isClientModalVisible, setIsClientModalVisible] = useState(false);
  const [isEmployeeModalVisible, setIsEmployeeModalVisible] = useState(false);
  const [isOSModalVisible, setIsOSModalVisible] = useState(false);

  const toggleClientModalVisibility = () => {
    setIsClientModalVisible((prev) => !prev);
  };
  const toggleEmployeeModalVisibility = () => {
    setIsEmployeeModalVisible((prev) => !prev);
  };
  const toggleOSModalVisibility = () => {
    setIsOSModalVisible((prev) => !prev);
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
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  return useContext(ModalContext);
};
