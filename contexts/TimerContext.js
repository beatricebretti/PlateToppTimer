import React, { createContext, useState } from 'react';

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [timers, setTimers] = useState([null, null, null, null]); // For 4 cooking plates
  const [ovenTimer, setOvenTimer] = useState(null); // For the oven

  const startTimer = (index, duration) => {
    let newTimers = [...timers];
    newTimers[index] = duration;
    setTimers(newTimers);
  };

  const startOvenTimer = (duration) => {
    setOvenTimer(duration);
  };

  return (
    <TimerContext.Provider value={{ timers, startTimer, ovenTimer, startOvenTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

