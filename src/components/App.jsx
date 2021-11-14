import React, { useState } from "react";
import Header from "./header";
import DropDown from "./dropDowns";
import Timer from "./timer";
import Controls from "./controls";

function App() {
  const [timer, updateTimer] = useState({
    workTime: "0",
    restTime: "",
    sets: 1,
  });
  const [play, setPlay] = useState(false);
  const [stop, setStop] = useState(true);

  return (
    <div>
      <Header />
      <DropDown updateTimer={updateTimer} timer={timer} stop={stop} />
      <Timer
        timer={timer}
        play={play}
        updateTimer={updateTimer}
        stop={stop}
        setStop={setStop}
        setPlay={setPlay}
      />
      <Controls setPlay={setPlay} play={play} stop={stop} setStop={setStop} />
    </div>
  );
}

export default App;
