import React, { useState } from "react";

function Timer(props) {
  const [seconds, updateSeconds] = useState(60);
  return (
    <div className="timer-container">
      <h1 className="timer">{props.timer.workTime}</h1>
      <h1 className="timer">:</h1>
      <h1 className="timer">{seconds === 60 ? "00" : seconds}</h1>
    </div>
  );
}

export default Timer;
