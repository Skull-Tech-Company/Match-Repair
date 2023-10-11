// ModalContext.d.ts
declare module "@/contexts/ModalContext" {
  export const ModalProvider: React.ComponentType;
  export const useModal: () => {
    isClientModalVisible: boolean;
    toggleClientModalVisibility: () => void;
  };
}
