import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "../App.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function AboutCard() {
  return (
    <Fade right duration={1000}>
      <Card
        style={{ height: "80vh" }}
        className="bg-transparent border-dark text-dark"
      >
        <Card.Header>
          <h1>About</h1>
        </Card.Header>
        <Card.Body className="mt-3">
          <p className="h3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with.
          </p>
        </Card.Body>
        <Card.Footer
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div>
            <a href="https://github.com/ensarsnr">
              <BsGithub color="#24292e" size={"50px"} />
            </a>
          </div>
          <div>
            <a href="www.linkedin.com/in/ensar-şener-b416412a3">
              <BsLinkedin color="#007b5" size={"50px"} />
            </a>
          </div>
        </Card.Footer>
      </Card>
    </Fade>
  );
}

export default AboutCard;
