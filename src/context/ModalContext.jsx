import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, handleModal }}>
            {children}
            {isModalOpen && <Modal />}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);

const Modal = () => {
    const { handleModal } = useModal();

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>New Project Modal</h2>
                <button onClick={handleModal}>Close Modal</button>

            </div>
        </div>
    );
};
