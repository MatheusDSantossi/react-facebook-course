import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const useAlertContext = () => {
    return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    return (
        <AlertContext.Provider value={{ isOpen, onOpen, onClose }}>
            {children}
        </AlertContext.Provider>
    );
};
