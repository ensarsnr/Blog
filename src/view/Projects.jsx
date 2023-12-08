import React from "react";
import { Row, Button } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

function Projects() {
  const projects = [
    {
      background: "#526D82",
      name: "Docker Website",
      URL: "https://github.com/ensarsnr/Docker-Website",
      img: "https://private-user-images.githubusercontent.com/113799443/271508860-129788e8-9a78-47ac-9652-ae5a8b3941ac.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE4OTg1MTcsIm5iZiI6MTcwMTg5ODIxNywicGF0aCI6Ii8xMTM3OTk0NDMvMjcxNTA4ODYwLTEyOTc4OGU4LTlhNzgtNDdhYy05NjUyLWFlNWE4YjM5NDFhYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMjA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTIwNlQyMTMwMTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kYWU4MTNjOGI0ODFmMjg2NGIzYzQwMGZlMDdmZDg3NDNmMjg4MDRjNTQyMWVkNzdjZWQwYWEzNTMxYjBkODdkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.uymYxJnKogBm_6i3ij2P6B5xanVth6UabeIUKnpXvHU",
      skill: ["ReactJS", "Tailwind", "NodeJS", "ExpressJS", "Linux Commands"],
      date: "2022 - tarih",
      iconColor: "#79E0EE",
      iconBgColor: "#393646",
      arrowColor: "#526D82",
      comment:
        "Using docker's deploy process with an interface via the browser.",
      buttonText: "Source Code",
      icon: <FaReact size="100%" />,
    },
    {
      background: "#526D82",
      name: "Chat App",
      URL: "https://github.com/ensarsnr/chat-app-frontend",
      img: "https://private-user-images.githubusercontent.com/113799443/288551952-9538d8da-f9a7-44a4-a1a7-b860cfd62175.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE4OTg2MTAsIm5iZiI6MTcwMTg5ODMxMCwicGF0aCI6Ii8xMTM3OTk0NDMvMjg4NTUxOTUyLTk1MzhkOGRhLWY5YTctNDRhNC1hMWE3LWI4NjBjZmQ2MjE3NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMjA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTIwNlQyMTMxNTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMWE0YTRkMTYwZDZjMWY1ZjAyZjcxNjc5OWZlMDdmZWIxYWI3MzhiMDJhNjhmZjEyNjhkOTFkOWQyNjgxMzMxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.au9qj-i6HNaIVd4-X1IMd-gS7r8JKuNo_4_6LnC4mNA",
      skill: ["NextJS", "Tailwind", "MongoDB", "NodeJS", "ExpressJS"],
      date: "2022 - tarih",
      iconColor: "#DDE6ED",
      iconBgColor: "#609966",
      arrowColor: "#526D82",
      comment: "Real time chat application",
      buttonText: "Source Code",
      icon: <IoLogoNodejs />,
    },
    {
      background: "#526D82",
      name: "Beatiful React Hooks",
      URL: "https://github.com/antonioru/beautiful-react-hooks",
      img: "https://github.com/ensarsnr/beautiful-react-hooks/raw/master/logo.png",
      skill: ["README.md"],
      date: "2022 - tarih",
      iconColor: "#79E0EE",
      iconBgColor: "#393646",
      arrowColor: "#526D82",
      comment:
        "I provided Turkish support to a react special hook library that I liked.",
      buttonText: "Source Code",
      icon: <FaReact />,
    },
    {
      background: "#526D82",
      name: "Project Management",
      URL: "#",
      img: "",
      skill: ["VueJS", "MongoDB", "Tailwind", "NodeJS", "ExpressJS"],
      date: "2023 - tarih",
      iconColor: "#42b883",
      iconBgColor: "#35495e",
      arrowColor: "#526D82",
      comment:
        "The project I made to facilitate teamwork and manage projects in a more organized manner.",
      buttonText: "Source Code",
      icon: <FaVuejs size="100%" />,
    },
  ];

  return (
    <Row className="justify-content-start align-items-center">
      <h1
        className="text-center mt-5"
        style={{ fontSize: "5rem", color: "#DDE6ED" }}
      >
        Projects
      </h1>
      <VerticalTimeline lineColor="#DDE6ED">
        {projects.map((e, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: projects[index]["background"],
              color: "#DDE6ED",
            }}
            contentArrowStyle={{
              borderRight: `9px solid ${projects[index]["arrowColor"]}`,
            }}
            date={projects[index]["date"]}
            iconStyle={{
              background: projects[index]["iconBgColor"],
              color: projects[index]["iconColor"],
            }}
            icon={projects[index]["icon"]}
          >
            <div className="mb-5">
              <img
                alt="The project continues"
                className="rounded img-fluid"
                src={projects[index]["img"]}
              />
            </div>

            {projects[index]["skill"].map((skill) => (
              <Button
                size="sm"
                className="mb-3"
                variant="secondary"
                style={{ margin: "2px", borderRadius: "60px" }}
              >
                {skill}
              </Button>
            ))}
            <h3 className="vertical-timeline-element-title">
              {projects[index]["name"]}
            </h3>
            <p>{projects[index]["comment"]}</p>
            <a href={projects[index]["URL"]} className="mt-5 btn btn-secondary">
              {projects[index]["buttonText"]}
            </a>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Row>
  );
}

export default Projects;
