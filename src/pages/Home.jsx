import '../assets/styles/home.css'
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TitlePage from '../view/TitlePage.jsx'
import About from '../view/About.jsx';

import '../App.css';
function Home() {
  return (
    <Container fluid>
      <Row className="bg-dark">
        <TitlePage />
      </Row>
      <Row>
        <About />
      </Row>
      <Row className="vh-100 bg-dark">
      </Row>
    </Container>
  );
}


export default Home;
