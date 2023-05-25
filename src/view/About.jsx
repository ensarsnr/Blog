import React from 'react';
import AboutCard from '../components/AboutCard.jsx';
import { Col, Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import img from '../assets/img/img-1.jpg';
import AboutAnimation from '../components/AboutAnimation.jsx'
function About() {
  return (
    <Parallax bgImage={img} strength={-500}>
      <Row className="text-center text-light justify-content-start align-items-center vh-100">
        <Col md={6}>
        <AboutAnimation />
        </Col>
        <Col className="m-atuo" md={6}>
          <AboutCard />
        </Col>
      </Row>
    </Parallax>
  );
}

export default About;
