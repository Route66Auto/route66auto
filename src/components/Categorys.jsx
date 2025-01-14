import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Categorys = () => {
  const { categorys } = useSelector((state) => state.home);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
    <div className="w-[87%] mx-auto relative mb-10">
      <Carousel
        autoPlay={true}
        infinite={true}
        arrows={true}
        responsive={responsive}
        transitionDuration={500}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {categorys.map((category, index) => (
          <Link
            key={index}
            // Change the 'to' prop to navigate to the category page
            to={`/products?category=${category.name}`}
            className="block transition-transform duration-300 hover:scale-105 mx-2 mr-2 ml-2"
          >
            <div className="relative group h-[200px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                <span className="text-white font-semibold text-lg">
                  {category.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-[-1px] top-1/2 z-10 flex items-center justify-center w-8 h-8 bg-gray-200 border border-gray-300 rounded-full shadow hover:bg-gray-300 transition -translate-y-1/2 custom-arrow"
      aria-label="Previous Slide"
      onClick={onClick}
    >
      <span className="text-xl">❮</span>
    </div>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-[-2px] top-1/2 z-10 flex items-center justify-center w-8 h-8 bg-gray-200 border border-gray-300 rounded-full shadow hover:bg-gray-300 transition -translate-y-1/2 custom-arrow"
      aria-label="Next Slide"
      onClick={onClick}
    >
      <span className="text-xl mr-1">❯</span>
    </div>
  );
};

export default Categorys;
