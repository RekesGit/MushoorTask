import { Button, Card, Col } from "react-bootstrap";
import { useState } from "react";
import "./Card.css";

const Cards = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>Genre: {props.genre}</Card.Text>
            <Card.Text>Release: {props.release}</Card.Text>
            <Card.Text>Director: {props.director}</Card.Text>
            <div className={`custom_card ${open ? "custom_card_open" : ""}`}>
              Summary: <br />
              {props.summary}
            </div>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              {open ? "See less" : "See more"}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Cards;
