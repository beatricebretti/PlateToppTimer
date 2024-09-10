import React, { createContext, useState } from 'react';

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [timers, setTimers] = useState([null, null, null, null]);

  const startTimer = (index, duration) => {
    const newTimers = [...timers];
    newTimers[index] = duration;
    setTimers(newTimers);
  };

  return (
    <TimerContext.Provider value={{ timers, startTimer }}>
      {children}
    </TimerContext.Provider>
  );
};


