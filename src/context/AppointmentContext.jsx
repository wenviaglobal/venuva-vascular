import React, { createContext, useContext, useState, useCallback } from 'react';

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = useCallback((data = null) => {
    setModalData(data);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setModalData(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  }, []);

  return (
    <AppointmentContext.Provider value={{ isModalOpen, modalData, openModal, closeModal }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
};
