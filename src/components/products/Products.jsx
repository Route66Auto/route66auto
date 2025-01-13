import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Products = ({ title, products }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous }) => (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <div className="flex gap-2">
        <button
          onClick={previous}
          className="w-10 h-10 flex justify-center items-center bg-gray-200 border border-gray-300 rounded-full shadow hover:bg-gray-300 transition"
        >
          <FiChevronLeft className="text-gray-600" />
        </button>
        <button
          onClick={next}
          className="w-10 h-10 flex justify-center items-center bg-gray-200 border border-gray-300 rounded-full shadow hover:bg-gray-300 transition"
        >
          <FiChevronRight className="text-gray-600" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col-reverse gap-8">
      <Carousel
        autoPlay
        infinite
        arrows={false}
        responsive={responsive}
        transitionDuration={500}
        renderButtonGroupOutside
        customButtonGroup={<ButtonGroup />}
      >
        {products.map((productGroup, index) => (
          <div key={index} className="flex flex-col gap-4">
            {productGroup.map((productId, j) => (
              <Link
                key={j}
                className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition"
                to="#"
              >
                <img
                  className="w-28 h-28 object-contain rounded-md"
                  src={productId.images[0]}
                  alt={`Product ${productId}`}
                />
                <div className="ml-4 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {productId.name}
                  </h3>
                  <span className="text-xl font-bold text-orange-600">
                    R$ {productId.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Products;
