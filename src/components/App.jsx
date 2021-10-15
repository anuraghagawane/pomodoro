import React, { useState } from "react";
import Header from "./header";
import DropDown from "./dropDowns";
import Timer from "./timer";
import Controls from "./controls";

function App() {
  const [timer, updateTimer] = useState({
    workTime: 25,
    restTime: 5,
    sets: 2,
  });
  const [play, setPlay] = useState(false);
  return (
    <div>
      <Header />
      <DropDown updateTimer={updateTimer} timer={timer} />
      <Timer timer={timer} play={play} />
      <Controls setPlay={setPlay} />
    </div>
  );
}

export default App;
