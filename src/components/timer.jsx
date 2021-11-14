import React, { useEffect, useState } from "react";
import Sound from "../sound/Meditation-bell-sound.mp3";

function Timer(props) {
  const [seconds, updateSeconds] = useState(0);
  const { workTime, restTime, sets } = props.timer;
  const [timeusing, changeTimeUsing] = useState("workTime");
  const [runningTime, changeRunningTime] = useState(workTime);
  const sound = new Audio(Sound);

  function playSound() {
    sound.play();
  }

  const initialState = {
    workTime: "0",
    restTime: "",
    sets: 1,
  };

  useEffect(() => {
    if (props.stop) {
      props.setPlay(false);
      props.updateTimer(initialState);
      changeRunningTime(workTime);
      updateSeconds(0);
    }
  }, [props.stop]);

  useEffect(() => {
    changeRunningTime(workTime);
  }, [workTime]);

  useEffect(() => {
    let id;
    if (props.play) {
      if (seconds === 0) {
        updateSeconds(59);
        changeRunningTime(runningTime - 1);
      }
      if (seconds !== 0) {
        id = setInterval(() => {
          const newsec = seconds - 1;
          updateSeconds(newsec);
          console.log(seconds);
        }, 1000);
      }
      if (runningTime === 0 && seconds === 0) {
        playSound();
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
        if (runningTime === 0 && seconds === 0 && sets == 1) {
          // playSound();
          props.setStop(true);
        }
      }
    }
    return () => {
      clearInterval(id);
    };
  }, [seconds, props.play]);

  return (
    <div className="timer-container">
      <h1 className="timer">
        {runningTime < 10 ? "0" : null}
        {runningTime}
      </h1>
      <h1 className="timer">:</h1>
      <h1 className="timer">
        {seconds < 10 ? "0" : null}
        {seconds}
      </h1>
    </div>
  );
}

export default Timer;
