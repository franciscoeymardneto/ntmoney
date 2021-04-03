import { GlobalStyle } from './assets/styles/global';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header';

import  Modal  from 'react-modal'

import { useState } from 'react';
import { NewTransactionsModal } from './components/NewTransactionsModal';

Modal.setAppElement('#root')

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
      <NewTransactionsModal isOpen={ isNewTransactionModalOpen } onRequestClose={ handleCloseNewTransactionwModal }/> 
      <GlobalStyle/>
    </>
  )
}
