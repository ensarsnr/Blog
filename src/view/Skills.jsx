import React from "react";
import { Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import SkillProgress from "../components/SkillProgress";

function Skills() {
  return (
    <div className="mb-5 text-center">
      <h1 style={{ fontSize: "5rem", color: "#DDE6ED" }} className="mt-5">
        Skill Set
      </h1>
      <Row>
        <Fade left duration={2000}>
          <div className="col-sm-6">
            <SkillProgress name="JavaScript" limited="70%" />
            <SkillProgress name="Html" limited="95%" />
            <SkillProgress name="Css/Boostrap" limited="85%" />
          </div>
        </Fade>
        <Fade right duration={2000}>
          <div className="col-sm-6">
            <SkillProgress name="ReactJS" limited="60%" />
            <SkillProgress name="Flutter" limited="60%" />
            <SkillProgress name="C#" limited="40%" />
          </div>
        </Fade>
      </Row>
    </div>
  );
}

export default Skills;
