import { Container, Row } from "react-bootstrap";
import Card from "./Cards";

const CardContainer = () => {
  let cards = [
    {
      title: "Black Widow",
      image:
        "https://static.bunnycdn.ru/i/cache/images/d/d8/d81421834d6ebebd6a3089389e28004a.jpg-w380",
      release: "2021-07-09",
      genre: "Sci-Fi, Adventure, Action",
      summary:
        "In Marvel Studios' action-packed spy thriller Black Widow Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
      director: "Cate Shortland",
    },
    {
      title: "F9",

      image:
        "https://static.bunnycdn.ru/i/cache/images/9/9c/9c3bf0cac7153db4f5677be55246bddf.jpg-w380",
      release: "2021-05-19",
      genre: "Thriller, Adventure, Action",
      summary:
        "Cipher enlists the help of Jakob, Dom's younger brother to take revenge on Dom and his team.",
      director: "Justin Lin",
    },
  ];

  return (
    <>
      <h1>LIST OF MOVIES</h1>
      <Container>
        <Row>
          {cards.map(function (card, index) {
            return (
              <Card
                key={index}
                title={card.title}
                image={card.image}
                genre={card.genre}
                summary={card.summary}
                release={card.release}
                director={card.director}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
