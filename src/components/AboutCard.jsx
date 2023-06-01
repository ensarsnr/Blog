import React from "react";
import { Card } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "../App.css";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with.
        </Card.Body>
        <Card.Footer
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div>
            <a href="#">
              <BsMedium color="black" size={"50px"} />
            </a>
          </div>
          <div>
            <a href="#">
              <BsGithub color="black" size={"50px"} />
            </a>
          </div>
          <div>
            <a href="#">
              <BsTwitter color="#068DA9" size={"50px"} />
            </a>
          </div>
        </Card.Footer>
      </Card>
    </Fade>
  );
}

export default AboutCard;
