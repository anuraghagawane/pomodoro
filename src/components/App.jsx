import React, { useState } from "react";
import Header from "./header";
import DropDown from "./dropDowns";
import Timer from "./timer";
import Controls from "./controls";

function App() {
  const [timer, updateTimer] = useState({
    workTime: 2,
    restTime: 1,
    sets: 2,
  });
  const [play, setPlay] = useState(false);

  return (
    <div>
      <Header />
      <DropDown updateTimer={updateTimer} timer={timer} />
      <Timer timer={timer} play={play} updateTimer={updateTimer} />
      <Controls setPlay={setPlay} play={play} />
    </div>
  );
}

export default App;
