import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../images/banner1offerwall.avif';
import image2 from '../../images/banner2offerwall.jpg';
import image3 from '../../images/banner3offerwall.gif';
import image4 from '../../images/banner4offerwall.avif';
import image5 from '../../images/banner5offerwall.jpg';
import './slider.css';

const Slider =()=>{
    return(

        <div className="slider">
        <Carousel  data-pause="hover" >
      {/* <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
              <button className="offerwall">
              <p>🥳Diwali offer🥳</p>
                <p>🔥50% off🔥</p>
              <p>On this product</p>
              </button>
                
                <a href="/product/6339244df690d3302cedffc6" target="_blank" rel="noreferrer">
          <button className="button">BUY NOW </button>
          </a>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item interval={2000}>
        <a href="/product/63394101f690d3302cee02f9" target="_blank" rel="noreferrer">
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        </a>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={4000}>
      <a href="/product/63392ea5f690d3302cee0176" target="_blank" rel="noreferrer">
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        </a>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={2000}>
        <a href="/products/maybelline" target="_blank" rel="noreferrer">
        <img
          className="d-block w-100"
          src={image4}
          alt="Third slide"
        />
        </a>
        <Carousel.Caption>
          {/* <h3>fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
          <a href="/product/63392fedf690d3302cee01f1" target="_blank" rel="noreferrer">
        <img
          className="d-block w-100"
          src={image5}
          alt="fifth slide"
        />
        </a>
        <Carousel.Caption>
          {/* <h3>fifth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <a href="/product/633b385839ed1437d8a645e6" target="_blank" rel="noreferrer">
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        </a>
        <Carousel.Caption>
              {/* <button className="offerwall">
              <p>🥳Diwali offer🥳</p>
                <p>🔥50% off🔥</p>
              <p>On this product</p>
              </button> */}
                
                {/* <a href="/product/633b385839ed1437d8a645e6" target="_blank" rel="noreferrer">
          <button className="button">BUY NOW </button>
          </a> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    );
}

export default Slider;