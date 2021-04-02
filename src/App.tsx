import { GlobalStyle } from './assets/styles/global';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header';

import  Modal  from 'react-modal'

import { useState } from 'react';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionwModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionwModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionwModal={handleOpenNewTransactionwModal}/>
      <Dashboard/>

      <Modal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionwModal}
        >
          <h2>Add Transaction</h2>
      </Modal>
        
      <GlobalStyle/>
    </>
  )
}
