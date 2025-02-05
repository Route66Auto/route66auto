import React from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import Ratings from "../Ratings";
import { Link } from "react-router-dom";

const ShopProducts = ({ styles, products }) => {
  return (
    <div
      className={`w-full grid ${
        styles === "grid"
          ? "grid-cols-3 md-lg:grid-cols-2 md:grid-cols-2"
          : "grid-cols-1 md-lg:grid-cols-2 md:grid-cols-2"
      } gap-3`}
    >
      {products.map((p, i) => (
        <div key={i}
          className={`flex transition-all duration-1000 hover:shadow-md hover:-translate-y-3 ${
            styles === "grid"
              ? "flex-col justify-start items-start"
              : "justify-start items-center md-lg:flex-col md-lg:justify-start md-lg:items-start"
          } w-full gap-4 bg-white p-1 rounded-md`}
        >
          <div
            className={
              styles === "grid"
                ? "w-full relative group h-[210px] md:h-[270px] xs:h-[170px] overflow-hidden"
                : "md-lg:w-full relative group h-[210px] md:h-[270px] overflow-hidden"
            }
          >
            <img
              className="h-full rounded-md md:h-[270px] xs:h-[170px] w-full object-contain"
              src={p.images[0]}
              alt="image"
            />
            <ul className="flex justify-center items-center gap-2 absolute bottom-[-40px] group-hover:bottom-3 w-full transition-all duration-500">
              <li className="bg-white w-[32px] h-[32px] flex justify-center items-center rounded-full text-slate-600 shadow-md hover:bg-orange-600 hover:text-white transition-all duration-300 cursor-pointer text-sm">
                <AiFillHeart />
              </li>
              <Link
                to="#"
                className="bg-white w-[32px] h-[32px] flex justify-center items-center rounded-full text-slate-600 shadow-md hover:bg-orange-600 hover:text-white transition-all duration-300 text-sm"
              >
                <FaEye />
              </Link>
              <li className="bg-white w-[32px] h-[32px] flex justify-center items-center rounded-full text-slate-600 shadow-md hover:bg-orange-600 hover:text-white transition-all duration-300 cursor-pointer text-sm">
                <AiOutlineShoppingCart />
              </li>
            </ul>
          </div>
          <div className="flex justify-start items-start flex-col gap-1">
            <h2 className="font-medium text-sm truncate">
              {p.name}
            </h2>
            <div className="flex justify-start items-center gap-2">
              <span className="text-md font-medium text-orange-600">
                R$ {p.price}
              </span>
            </div>
            <div className="flex text-lg">
              <Ratings ratings={p.rating} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProducts;
