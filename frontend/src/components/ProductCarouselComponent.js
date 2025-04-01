import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductCarouselComponent = () => {
  const cursorP = {
    cursor: "pointer",
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/feature/feature-laptop.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Laptop Black Friday is here!</h3>
          </LinkContainer>
          <p>Acer Nitro 5 2020 only 500$ today!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/feature/feature-game.avif"
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Want to find best seller to play Marvel Rivals?</h3>
          </LinkContainer>
          <p>Laptop and monitor under 500$ sale</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/carousel/carousel-3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Bestseller in Cameras Category</h3>
          </LinkContainer>
          <p>
            Tet Holiday is coming, let buy a camera to capture the best moment even 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;
