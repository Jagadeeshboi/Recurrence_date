'use client';
import React, { useState, useContext, createContext } from 'react';

// Create the context
const ContextApi = createContext();

const ContextProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [recurrenceType, setRecurrenceType] = useState('none');
  const [customRecurrence, setCustomRecurrence] = useState({});
  const [recurrenceSettings, setRecurrenceSettings] = useState({
    interval: 1,
    daysOfWeek: 0,
    nthDay: 0,
    Year: 0,
  });
  return (
    <ContextApi.Provider
      value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        recurrenceType,
        setRecurrenceType,
        customRecurrence,
        setCustomRecurrence,
        recurrenceSettings,
        setRecurrenceSettings,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};
export const useGlobalContext = () => useContext(ContextApi);

export default ContextProvider;
