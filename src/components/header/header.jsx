import React from "react";
import Slider from "react-slick";
import "./header.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

export default function Header() {
  const images = [
    {
      src: "https://storage.googleapis.com/a1aa/image/tnHbYesAeFnTEUwh0GV57pHJNBZ9fVgOfmf0A3eFg3hShdW6E.jpg",
      title: "Modern house",
      description: "3 bedrooms, 1 kitchen, 2 bathrooms",
      temperature: "-2°C Very Cold",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/QZbH9PlrSx4pDJtdSeDDJo2Hff8KYpvKRaP7XL4CLHcFszSnA.jpg",
      title: "Stylish Apartment",
      description: "2 bedrooms, 1 kitchen, 1 bathroom",
      temperature: "15°C Mild",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/8d4ZMso9e9TvFCYRrTdOagjAPRrean6sDvDWuIYPcGHE2ZpTA.jpg",
      title: "Luxury Villa",
      description: "4 bedrooms, 2 kitchens, 3 bathrooms",
      temperature: "30°C Hot",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="main-image">
            <img src={image.src} alt={image.title} />
            <div className="overlay">
              <h1>{image.title}</h1>
              <p>{image.description}</p>
              <div className="temperature">
                <i className="fas fa-thermometer-half"></i>
                <span>{image.temperature}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
