import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatifyy.png";

import bitsOfCode from "../../Assets/Projects/bloog.png";

import blob from "../../Assets/Projects/blop.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Darkor"
              description="Darkor is an online store for your business.This my works"
              ghLink="https://github.com/azizjon003/"
              demoLink="https://client-darkor.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pentagol"
              description="Pentagol is a web service with football news and online tournament tables. This is a souvenir from our competition"
              ghLink="https://github.com/Azizjon003/Pentogol-backend"
              demoLink="https://github.com/Azizjon003/Pentogol-backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blob}
              isBlog={false}
              title="Task Managment"
              description="Creating a task management using Nest.js. In this, I strengthened my knowledge about the nestjs postgres typorm"
              ghLink="https://github.com/Azizjon003/Nest-js"
              demoLink="https://github.com/Azizjon003/Nest-js"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
