import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Ratings = ({ ratings }) => {
  const totalStars = 5; // Número total de estrelas

  return (
    <div className="flex gap-[2px]"> {/* Espaçamento reduzido */}
      {Array.from({ length: totalStars }).map((_, index) => {
        const starIndex = index + 1; // Estrelas começam de 1

        if (ratings >= starIndex) {
          return (
            <span key={index} className="text-[#EDBB0E]">
              <FaStar />
            </span>
          );
        } else if (ratings >= starIndex - 0.5) {
          return (
            <span key={index} className="text-[#EDBB0E]">
              <FaStarHalfAlt />
            </span>
          );
        } else {
          return (
            <span key={index} className="text-slate-600">
              <CiStar />
            </span>
          );
        }
      })}
    </div>
  );
};

export default Ratings;

