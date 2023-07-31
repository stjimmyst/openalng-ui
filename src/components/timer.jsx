import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const Timer = (props) => {

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
          return "Timer"
        }
      };

      function renderTimer() {

        // if(props.isStartAutomaticly) {
        //     setIsRunning(true);
        // }
            return <button className="sec-test__btn btnTest" onClick={startTimer}>{formatTime(time)}</button>
      }

    
      return (
        renderTimer()
        // renderTimer()
        // <button className="sec-test__btn btnTest" onClick={startTimer}>{formatTime(time)}</button>
      )


}

Timer.defaultProps = {
    isStartAutomaticly: false,
    isButton: false
}

Timer.propTypes = {
	isStartAutomaticly: PropTypes.bool,
    isButton: PropTypes.bool
}
export default Timer