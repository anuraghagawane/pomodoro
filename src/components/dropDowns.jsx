import React from "react";

function DropDown() {
  return (
    <div className="dropDown-container">
      <select className="dropDown" placeholder="work time" name="work time">
        <option>25 min</option>
        <option>30 min</option>
        <option>45 min</option>
      </select>

      <select className="dropDown" placeholder="rest time" name="rest time">
        <option>5 min</option>
        <option>10 min</option>
        <option>15 min</option>
      </select>

      <select className="dropDown" placeholder="sets" name="sets">
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </div>
  );
}

export default DropDown;
