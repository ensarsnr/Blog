import React from "react";
import { Row, Button } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Projects() {
  // Project'ler içerisinde medium makaleleri de eklenebilir
  // sadece proje değil bi kaç makale yazıp paylaşabiliriz.
  const projects = [
    {
      background: "white",
      name: "Counter",
      URL: "#",
      img: "",
      skill: ["React", "Redux", "Boostrap"],
      date: "2022 - tarih",
      iconColor: "",
      iconBgColor: "orange",
      arrowColor: "white",
      comment:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form',
    },
    {
      background: "white",
      name: "Project-2",
      URL: "#",
      img: "",
      skill: ["react", "nodejs", "SQLite"],
      date: "2022 - tarih",
      iconColor: "",
      iconBgColor: "aqua",
      arrowColor: "white",
      comment:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form',
    },
    {
      background: "white",
      name: "Project-3",
      URL: "#",
      img: "",
      skill: ["react", "nodejs", "SQLite"],
      date: "2022 - tarih",
      iconColor: "",
      iconBgColor: "yellow",
      arrowColor: "white",
      comment:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form',
    },
    {
      background: "white",
      name: "Project-4",
      URL: "#",
      img: "",
      skill: ["react", "nodejs", "SQLite"],
      date: "2023 - tarih",
      iconColor: "",
      iconBgColor: "violet",
      arrowColor: "white",
      comment:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form',
    },
  ];

  return (
    <Row className="justify-content-start align-items-center">
      <VerticalTimeline>
        {projects.map((e, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: projects[index]["background"],
              color: "black",
            }}
            contentArrowStyle={{
              borderRight: `9px solid ${projects[index]["arrowColor"]}`,
            }}
            date={projects[index]["date"]}
            iconStyle={{
              background: projects[index]["iconBgColor"],
              color: projects[index]["iconColor"],
            }}
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
              VIEW SOURCE CODE
            </a>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Row>
  );
}

export default Projects;
