import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModal) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container>
        <h2>Cadastrar transação</h2>
      </Container>
    </Modal>
  );
}
