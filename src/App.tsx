import { DashBoard } from "./Dashboard";
import { Header } from "./Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./NewTransactionModal";

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <DashBoard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
    </>
  );
}

export default App;
