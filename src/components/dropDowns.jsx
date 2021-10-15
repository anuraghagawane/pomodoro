import React, { useState } from "react";

function DropDown(props) {
  function updateTime(event) {
    const { name, value } = event.target;
    props.updateTimer((prevValue) => {
      return { ...prevValue, [name]: parseInt(value) };
    });
  }

  return (
    <div className="dropDown-container">
      <select
        className="dropDown"
        placeholder="workTime"
        name="workTime"
        onChange={updateTime}
        value={props.timer.workTime}
      >
        <option value="25">25 min</option>
        <option value="30">30 min</option>
        <option value="45">45 min</option>
      </select>

      <select
        className="dropDown"
        placeholder="restTime"
        name="restTime"
        onChange={updateTime}
        value={props.timer.restTime}
      >
        <option value="5">5 min</option>
        <option value="10">10 min</option>
        <option value="15">15 min</option>
      </select>

      <select
        className="dropDown"
        placeholder="sets"
        name="sets"
        onChange={updateTime}
        value={props.timer.sets}
      >
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  );
}

export default DropDown;
