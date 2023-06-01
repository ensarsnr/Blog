import React from "react";
import "../App.css";
function SkillProgress(props) {
  return (
    <div>
      <h2 className="w-75 m-auto mt-5 text-start" style={{ color: "#DDE6ED" }}>
        {props.name}
      </h2>
      <div
        style={{
          height: "50px",
          borderRadius: "10px",
          backgroundColor: "#545B77",
        }}
        className="deneme progress w-75 m-auto mt-2 "
      >
        <div
          class="progress-bar"
          style={{
            backgroundColor: "#374259",
            borderRadius: "10px 10px",
            width: props.limited,
          }}
        >
          <h6 style={{ color: "#DDE6ED" }}>{props.limited}</h6>
        </div>
      </div>
    </div>
  );
}

export default SkillProgress;
