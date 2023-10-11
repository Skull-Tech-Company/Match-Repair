import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext({
  isClientModalVisible: false,
  isEmployeeModalVisible: false,
  toggleClientModalVisibility: () => {},
  toggleEmployeeModalVisibility: () => {},
});

export const ModalProvider = ({ children }) => {
  const [isClientModalVisible, setIsClientModalVisible] = useState(false);
  const [isEmployeeModalVisible, setIsEmployeeModalVisible] = useState(false);

  const toggleClientModalVisibility = () => {
    setIsClientModalVisible((prev) => !prev);
  };
  const toggleEmployeeModalVisibility = () => {
    setIsEmployeeModalVisible((prev) => !prev);
  };

  return (
    <ModalContext.Provider
      value={{
        isClientModalVisible,
        toggleClientModalVisibility,
        isEmployeeModalVisible,
        toggleEmployeeModalVisibility,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
