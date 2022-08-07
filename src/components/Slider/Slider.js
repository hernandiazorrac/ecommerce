import { Carousel } from 'react-bootstrap';

export const Slider = () => {
    return (
        <Carousel className="carousel" pause="false">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/digb4d0uf/image/upload/v1659845481/ReactJS%20Coder/Plan-B-Skateboarding-Wallpapers-43-images-_vx6cdk.webp"
              alt="First slide"
              draggable="false"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/digb4d0uf/image/upload/v1659843723/ReactJS%20Coder/flip-eurodyssey-matt-berger-_-boardslide_rydefs.webp"
              alt="Second slide"
              draggable="false"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/digb4d0uf/image/upload/v1659833337/ReactJS%20Coder/cruzade-skateboards_nnavtw.webp"
              alt="Third slide"
              draggable="false"
            />
          </Carousel.Item>
        </Carousel>
      );
}