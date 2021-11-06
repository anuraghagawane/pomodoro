import React, { useEffect, useState } from "react";

function Timer(props) {
  const [seconds, updateSeconds] = useState(0);
  const { workTime, restTime, sets } = props.timer;
  const [timeusing, changeTimeUsing] = useState("workTime");
  const [runningTime, changeRunningTime] = useState(workTime);

  useEffect(() => {
    let id;
    if (props.play) {
      if (seconds === 0) {
        updateSeconds(59);
        changeRunningTime(runningTime - 1);
        // runningTime = runningTime - 1;
        // props.updateTimer((prevValue) => {
        //   return { ...prevValue, workTime: workTime - 1 };
        // });
      }
      if (seconds !== 0) {
        id = setInterval(() => {
          const newsec = seconds - 1;
          updateSeconds(newsec);
          console.log(seconds);
        }, 1000);
      }
      if (runningTime === 0 && seconds === 0) {
        if (timeusing === "workTime") {
          changeRunningTime(restTime - 1);
          changeTimeUsing("restTime");
        } else if (timeusing === "restTime") {
          changeRunningTime(workTime - 1);
          changeTimeUsing("workTime");
          props.updateTimer((prevValue) => {
            return { ...prevValue, sets: sets - 1 };
          });
        }
      }
    }
    return () => {
      clearInterval(id);
    };
  }, [seconds, props.play]);

  return (
    <div className="timer-container">
      <h1 className="timer">{runningTime}</h1>
      <h1 className="timer">:</h1>
      <h1 className="timer">
        {seconds < 10 ? "0" : null}
        {seconds}
      </h1>
    </div>
  );
}

export default Timer;
