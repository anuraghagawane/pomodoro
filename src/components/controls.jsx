import React from "react";
import Play from "../img/play-solid.svg";
import Pause from "../img/pause-solid.svg";
import Stop from "../img/stop-solid.svg";

function Controls() {
  return (
    <div className="controls-container">
      <img className="controls" src={Stop}></img>
      <img className="controls" src={Pause}></img>
      <img className="controls" src={Play}></img>
    </div>
  );
}

export default Controls;
