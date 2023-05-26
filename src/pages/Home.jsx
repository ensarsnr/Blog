import '../assets/styles/home.css'
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TitlePage from '../view/TitlePage.jsx'
import About from '../view/About.jsx';
import Projects from '../view/Projects.jsx';
import '../App.css';
function Home() {
  // Arka plan renkleri değişebilir...
  return (
    <Container fluid>
      <Row className="bg-dark">
        <TitlePage />
      </Row>
      <Row >
        <About />
      </Row>
      <Row className="bg-dark"> 
        <Projects />
      </Row>
    </Container>
  );
}


export default Home;
