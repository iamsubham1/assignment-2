import React, { createContext, useContext, useState } from 'react';
import Modal from '../components/Modal';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <ModalContext.Provider value={{ handleModal }}>
            {children}
            {isModalOpen && <Modal />}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);


