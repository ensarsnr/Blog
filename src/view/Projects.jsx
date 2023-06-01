import React from "react";
import { Row, Button } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { RiFlutterFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";

function Projects() {
  // Project'ler içerisinde medium makaleleri de eklenebilir
  // sadece proje değil bi kaç makale yazıp paylaşabiliriz.
  const projects = [
    {
      background: "#526D82",
      name: "Counter",
      URL: "#",
      img: "",
      skill: ["React", "Redux", "Boostrap"],
      date: "2022 - tarih",
      iconColor: "#79E0EE",
      iconBgColor: "#393646",
      arrowColor: "#526D82",
      comment:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form',
      buttonText: "Source Code",
      icon: <FaReact size="100%" />,
    },
    {
      background: "#526D82",
      name: "Project-2",
      URL: "#",
      img: "",
      skill: ["Medium", "JavaScript", "ReactJS", "State", "Management"],
      date: "2022 - tarih",
      iconColor: "#DDE6ED",
      iconBgColor: "#E86A33",
      arrowColor: "#526D82",
      comment:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form',
      buttonText: "Read",
      icon: <BsMedium />,
    },
    {
      background: "#526D82",
      name: "Language Learning App",
      URL: "#",
      img: "",
      skill: ["Flutter", "Provider", "Shared Prefrences"],
      date: "2022 - tarih",
      iconColor: "white",
      iconBgColor: "#159895",
      arrowColor: "#526D82",
      comment:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form',
      buttonText: "Source Code",
      icon: <RiFlutterFill />,
    },
    {
      background: "#526D82",
      name: "Project-4",
      URL: "#",
      img: "",
      skill: ["react", "nodejs", "Child Process", "Linux"],
      date: "2023 - tarih",
      iconColor: "",
      iconBgColor: "#609966",
      arrowColor: "#526D82",
      comment:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form',
      buttonText: "Source Code",
      icon: <IoLogoNodejs />,
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
            {/* 
				Buraya bu şekilde resimde ekleyebiliriz daha düzgün tane..
			<div>
              <img width="400" src={imgg} />
            </div> 
			
			*/}
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
