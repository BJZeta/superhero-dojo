import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SearchForm from "../components/SearchForm";
import questionMark from '../assets/question.gif'

const MainPage = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={3} className="float-left">
          <h4>Select your Fighter</h4>
          <Image
            className="float-left"
            src={questionMark}
            width="80%"
          />
        </Col>
        <Col lg={5}>
          <SearchForm />
        </Col>
        <Col lg={3}>
          <h4 className="float-right">Select your Fighter</h4>
          <Image
            className="float-right"
            src={questionMark}
            width="80%"
          />
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default MainPage;
