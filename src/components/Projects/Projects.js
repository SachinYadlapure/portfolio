import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import dice from "../../Assets/Projects/dice.png";
import course from "../../Assets/Projects/course.png";
import food from "../../Assets/Projects/food.png";
import fChat from "../../Assets/Projects/fChat.png";
import foods from "../../Assets/Projects/foods.png";

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
              imgPath={food}
              isBlog={false}
              title="Food Delivery App"
              description="Food delivery application using react js as frontend."
              ghLink="https://github.com/SachinYadlapure/FoodOrder_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foods}
              isBlog={false}
              title="Ecommerce App"
              description="Ecommerce Application for multiple products sales, this application created by using React js and backend Node js, Express js and some payment gateway"
              ghLink="https://github.com/SachinYadlapure/Ecommerce_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={course}
              isBlog={false}
              title="Online Courses"
              description="This application providing courses for students for better learning and better platform to achive a desired role in software industries "
              ghLink="https://github.com/SachinYadlapure/OnlineCourses"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fChat}
              isBlog={false}
              title="Demo-fChat"
              description="This application created for demo chat for chatting with group of friends and family with fun, this app same as like whatsApp but not fully functionality like whatsApp but similar to social chatting application"
              ghLink="https://github.com/SachinYadlapure/demo-fchat"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dice}
              isBlog={false}
              title="Dice Game"
              description="Dice game is simple game created by using JavaScript and HTML. This game very simple only for fun."
              ghLink="https://github.com/SachinYadlapure/Dice_game"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Forecast"
              description="This application also using JavaScript and HTML. Thia app shows weather condition of perticular places and i have used in this app weather api for details of weather "
              ghLink="https://github.com/SachinYadlapure/WeatherForecast"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
