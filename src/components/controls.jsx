import React from "react";
import Play from "../img/play-solid.svg";
import Pause from "../img/pause-solid.svg";
import Stop from "../img/stop-solid.svg";

function Controls(props) {
  function updatePlay() {
    props.setPlay((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div className="controls-container">
      {props.play ? (
        <img
          onClick={updatePlay}
          className="controls"
          src={Pause}
          alt="Pause"
        ></img>
      ) : (
        <img
          onClick={updatePlay}
          className="controls"
          src={Play}
          alt="Play"
        ></img>
      )}
      {/* <img className="controls" src={Stop} alt="Stop"></img>
       */}
    </div>
  );
}

export default Controls;
