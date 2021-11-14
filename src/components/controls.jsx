import React from "react";
import Play from "../img/play-solid.svg";
import Pause from "../img/pause-solid.svg";
import Stop from "../img/stop-solid.svg";

function Controls(props) {
  function updatePlay() {
    props.setStop(false);
    props.setPlay((prevValue) => {
      return !prevValue;
    });
  }

  function stopTimer() {
    props.setPlay(false);
    props.setStop(true);
  }
  return (
    <div className="controls-container">
      {props.play ? (
        <div>
          <img
            onClick={updatePlay}
            className="controls"
            src={Pause}
            alt="Pause"
          ></img>
          <img
            onClick={stopTimer}
            className="controls"
            src={Stop}
            alt="Stop"
          ></img>
        </div>
      ) : (
        <img
          onClick={updatePlay}
          className="controls"
          src={Play}
          alt="Play"
        ></img>
      )}
    </div>
  );
}

export default Controls;
