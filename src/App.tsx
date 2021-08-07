import React from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { Global } from './styles/global';
import { useState } from 'react';
import Modal from 'react-modal'
import { NewTransModal } from './components/NewTransModal';
import {  TransProvider } from './TransContext';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransModalOpen,setIsNewTransModalOpen] = useState(false);
  

  function handleOpenNewTransModal (){
      setIsNewTransModalOpen(true);
  }

  function handleCloseNewTransModal (){
      setIsNewTransModalOpen(false);
  }

  return (
    <TransProvider>
    <Header onOpenNewTrans={handleOpenNewTransModal}/>
    <Dashboard/>
   <NewTransModal isOpenModal={isNewTransModalOpen} handleCloseModal={handleCloseNewTransModal}/>
    <Global/>
    </TransProvider>
  );
}


