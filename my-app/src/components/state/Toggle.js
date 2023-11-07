import React, { useState } from "react";
import "./ToggleStyle.css";
const Toggle = () => {
  const [on, setOn] = useState(false);
  console.log(on);
  const changesSate = () => {
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`Toggle ${on ? "active" : ""}`} onClick={changesSate}>
        <div className={`Spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="ControlToggle">
        <div className="ToggleOn" onClick={() => setOn(true)}>
          On
        </div>
        <div className="ToggleOff" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
};

export default Toggle;
