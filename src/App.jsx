import React from "react";

function App() {
  return (
    <div>
      <header className="header">
        <span>Pomodoro Timer</span>
      </header>
      <div className="dropDown-container">
        <select className="dropDown" placeholder="work time" name="work time">
          <option>15 min</option>
          <option>30 min</option>
          <option>45 min</option>
        </select>

        <select className="dropDown" placeholder="rest time" name="rest time">
          <option>5 min</option>
          <option>10 min</option>
          <option>15 min</option>
        </select>

        <select className="dropDown" placeholder="sets" name="sets">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="timer-container">
        <h1 className="timer">10:30</h1>
      </div>
    </div>
  );
}

export default App;
