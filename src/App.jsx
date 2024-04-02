import React from 'react'
import Navbar from './components/Navbar'
import SecondBar from './components/SecondBar'
import Main from './components/Main'
import { ModalProvider } from './context/ModalContext';
import Header from './components/Header';

const App = () => {
  return (



    <>
      <ModalProvider>
        <Header />
        <Navbar />
        <SecondBar />
        <Main />
      </ModalProvider>
    </>
  )
}

export default App
