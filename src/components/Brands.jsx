import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Brands = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="w-full md-lg:mt-6">
      <div className="w-[85%] lg:w-[90%] mx-auto">
        <h2 className="text-2xl text-center font-semibold text-gray-800">Nossas Marcas</h2>
        <div className="w-[100px] h-[3px] bg-orange-600 mx-auto mt-4 rounded"></div>
        <div className="my-8 rounded-lg overflow-hidden shadow-lg">
          <Carousel
            autoPlay={true}
            infinite={true}
            arrows={false}
            responsive={responsive}
            autoPlaySpeed={2000}
            transitionDuration={500}
            containerClass="carousel-container" // Adding a class for custom styling
            itemClass="carousel-item-padding-40-px" // Adding padding around items
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((img, i) => (
              <Link className="h-auto w-full block bg-white" key={i} to="#">
                <img
                  src={`images/brands/${img}.png`}
                  alt={`Marca ${img}`}
                  className="w-full h-auto max-h-[150px] object-contain mx-auto"
                />
              </Link>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Brands;