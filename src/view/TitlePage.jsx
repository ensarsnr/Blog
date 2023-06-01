import React from "react";
import { Row, Col } from "react-bootstrap";
import Animations from "../components/Animations.jsx";
import dev from "../assets/anims/dev.json";
import Title from "../components/Title.jsx";
function TitlePage() {
  return (
    <Row className="text-center text-light justify-content-start align-items-center vh-100">
      <Col md="6">
        <div className="w-100 m-auto">
          <Title />
        </div>
      </Col>
      <Col md="6">
        <div className="m-auto w-75">
          <Animations animation={dev} />
        </div>
      </Col>
    </Row>
  );
}

export default TitlePage;
