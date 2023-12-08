import React from "react";
import {
  BsDiscord,
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
function Footer() {
  return (
    <div
      className="mt-5 text-center mb-5"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <div>
        <a href="#">
          <BsLinkedin color="#DDE6ED" size={50} />
        </a>
      </div>
      <div>
        <a href="#">
          <BsGithub color="DDE6ED" size={50} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
