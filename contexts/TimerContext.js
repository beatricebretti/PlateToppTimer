import React, { createContext, useState, useEffect } from 'react';

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [timers, setTimers] = useState([
    { id: 1, isActive: false, minutes: 0, seconds: 0 },
    { id: 2, isActive: false, minutes: 0, seconds: 0 },
    { id: 3, isActive: false, minutes: 0, seconds: 0 },
    { id: 4, isActive: false, minutes: 0, seconds: 0 },
  ]);

  const setTimerForPlate = (plateId, minutes, seconds) => {
    const updatedTimers = timers.map(timer =>
        timer.id === plateId
            ? { ...timer, isActive: true, minutes, seconds }
            : timer
    );
    setTimers(updatedTimers);
  };

  const startTimer = (plateId, duration) => {
    setTimers((prevTimers) => {
      const updatedTimers = prevTimers.map((timer) => {
        if (timer.id === plateId) {
          return {
            ...timer,
            isActive: true,
            minutes: Math.floor(duration / 60),
            seconds: duration % 60,
          };
        }
        return timer;
      });
      return updatedTimers;
    });
  };

  const stopTimer = (plateId) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer) =>
        timer.id === plateId ? { ...timer, isActive: false } : timer
      )
    );
  };

  const resetTimer = (plateId) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer) =>
        timer.id === plateId ? { ...timer, isActive: false, minutes: 0, seconds: 0 } : timer
      )
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(timers.map(timer => {
        if (timer.isActive) {
          if (timer.seconds > 0) {
            return { ...timer, seconds: timer.seconds - 1 };
          } else if (timer.minutes > 0) {
            return { ...timer, minutes: timer.minutes - 1, seconds: 59 };
          } else {
            return { ...timer, isActive: false }; 
          }
        }
        return timer;
      }));
    }, 1000);

    return () => clearInterval(interval); 
  }, [timers]);

  return (
    <TimerContext.Provider value={{ timers, startTimer, stopTimer, resetTimer, setTimerForPlate }}>
      {children}
    </TimerContext.Provider>
  );
};


