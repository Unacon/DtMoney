import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadiosButton } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionContext";

interface NewTransactionModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModal) {
  const { createTransaction } = useContext(TransactionsContext);
  const [type, setType] = useState("deposit");

  const [title, setTitle] = useState("");
  const [category, setcategory] = useState("");
  const [amount, setAmount] = useState(0);

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    limpaVariaveis();
    onRequestClose();
  }

  function limpaVariaveis() {
    setType("deposit");
    setTitle("");
    setcategory("");
    setAmount(0);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button type="button" onClick={onRequestClose} className="react-modal-close">
          <img src={closeImg} alt="Fechar modal"></img>
        </button>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" value={title} onChange={(event) => setTitle(event.target.value)} />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadiosButton
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadiosButton>
          <RadiosButton
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadiosButton>
        </TransactionTypeContainer>

        <input placeholder="Categoria" value={category} onChange={(event) => setcategory(event.target.value)} />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
