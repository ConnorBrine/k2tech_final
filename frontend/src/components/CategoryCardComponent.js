import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCardComponent = ({ category, idx }) => {
  const images = [
    "/images/books-category.jpeg",
    "/images/cameras-category.jpeg",
    "/images/computer-category.jpg",
    "/images/games-category.jpg",
    "/images/laptops-cataory.jpg",
    "/images/monitors-category.jpg",
    "/images/printers-category.jpg",
    "/images/software-category.jpg",
    "/images/tablets-category.png",
    "/images/video-category.jpg",
  ];
  return (
    <Card>
      <Card.Img
        crossOrigin="anonymous"
        variant="top"
        src={images[idx]}
      />
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
        <Card.Text>{category.description}</Card.Text>
        <LinkContainer to={`/product-list/category/${category.name}`}>
          <Button variant="primary">Go to the Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
