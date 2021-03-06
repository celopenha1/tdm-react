import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';
Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const handleOpenNewTransactionModal = () => setIsNewTransactionModalOpen(true);
  const handleCloseNewTransactionModal = () => setIsNewTransactionModalOpen(false);


  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
      <Dashboard />
    </>
  );
}

export default App;
