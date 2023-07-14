import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(40 * 60); // Время в секундах
    const [isRunning, setIsRunning] = useState(false);
  
    useEffect(() => {
      let timerId;
  
      if (isRunning && time > 0) {
        timerId = setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);
      }
  
      return () => {
        clearInterval(timerId);
      };
    }, [isRunning, time]);
  
    const startTimer = () => {
      setIsRunning(true);
    };
  
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;

      if (isRunning) {
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      } else {
        return "Start timer"
      }
  
      
    };



  return (
    <button type="button" className="writing-button1 button" onClick={startTimer}>
    timer
  </button>

  );
};

export default Timer;