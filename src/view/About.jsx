import React from 'react';
import AboutCard from '../components/AboutCard.jsx';
import { Col, Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import img from '../assets/img/cloud.jpg';
import AboutAnimation from '../components/AboutAnimation.jsx'
import '../App.css';
function About() {
  return (
    <Parallax bgImage={img} strength={-200}>
      <Row className="text-center text-light justify-content-start mb-2 custom-height align-items-center ">
        <Col md={6}>
        <AboutAnimation />
        </Col>
        <Col md={6} className="m-auto">
          <AboutCard />
        </Col>
      </Row>
    </Parallax>
  );
}

export default About;
