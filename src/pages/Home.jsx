import "../assets/styles/home.css";
import React from "react";
import { Container, Row } from "react-bootstrap";
import TitlePage from "../view/TitlePage.jsx";
import About from "../view/About.jsx";
import Projects from "../view/Projects.jsx";
import "../App.css";
function Home() {
  return (
    <Container fluid style={{ backgroundColor: "#DDE6ED" }}>
      <Row style={{ backgroundColor: "#27374D" }}>
        <TitlePage />
      </Row>
      <Row>
        <About />
      </Row>
      <Row style={{ backgroundColor: "#27374D" }}>
        <Projects />
      </Row>
    </Container>
  );
}

export default Home;
