import React, { useState } from "react";
import Ratings from "./Ratings";
import RatingTemp from "./RatingTemp";
import Pagination from "./Pagination";
import RatingReact from "react-rating";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Reviews = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const userInfo = {};
  const [rat, setRat] = useState("");
  return (
    <div className="mt-8">
  <div className="flex gap-10 md:flex-col">
    {/* Avaliação geral */}
    <div className="flex flex-col gap-4 py-4">
      <div className="flex items-center gap-2">
        <span className="text-6xl font-semibold text-orange-600">4.5</span>
        <span className="text-3xl font-semibold text-slate-600">/5</span>
      </div>
      <div className="flex text-4xl">
        <Ratings ratings={4.5} />
      </div>
      <p className="text-sm text-slate-600">23 Avaliações</p>
    </div>

    {/* Distribuição das avaliações */}
    <div className="flex flex-col gap-6 py-4">
      {[5, 4, 3, 2, 1, 0].map((rating, index) => {
        const percentage = rating === 5 ? 60 : rating === 4 ? 70 : rating === 3 ? 40 : rating === 2 ? 30 : rating === 1 ? 10 : 0;
        return (
          <div key={rating} className="flex items-center gap-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={rating} />
            </div>
            <div className="w-[200px] h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#EDBB0E] transition-all duration-500" style={{ width: `${percentage}%` }}></div>
            </div>
            <p className="text-sm text-slate-600">{Math.floor(Math.random() * 10) + 5}</p>
          </div>
        );
      })}
    </div>
  </div>

  {/* Título de reviews */}
  <h2 className="text-slate-600 text-xl font-bold py-5">Reviews do Produto: 30</h2>

  {/* Reviews individuais */}
  <div className="flex flex-col gap-8 pb-10 pt-4">
    {[1, 2, 3, 4, 5, 6].map((r, i) => (
      <div key={i} className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 text-xl">
            <RatingTemp rating={4} />
          </div>
          <span className="text-slate-600 text-sm">7 Jun 2024</span>
        </div>
        <span className="text-slate-600 font-semibold text-md">Vinicius Leme</span>
        <p className="text-slate-600 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
    ))}

    {/* Paginação */}
    <div className="flex justify-end mt-4">
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalItem={20}
        perPage={perPage}
        showItem={Math.floor(20 / 3)}
      />
    </div>
  </div>

  {/* Formulário de novo review */}
  <div className="mt-8">
    {userInfo ? (
      <div className="flex flex-col gap-4">
        {/* Rating */}
        <div className="flex gap-1">
          <RatingReact
            onChange={(e) => setRat(e)}
            initialRating={rat}
            emptySymbol={<span className="text-slate-600"><CiStar /></span>}
            fullSymbol={<span className="text-[#EDBB0E]"><AiFillStar /></span>}
          />
        </div>

        {/* Comentário */}
        <form className="flex flex-col gap-3">
          <textarea
            className="border border-slate-300 rounded-lg p-3 w-full"
            placeholder="Deixe seu comentário..."
            name="review"
            rows="5"
          />
          <button
            type="submit"
            className="py-2 px-5 mt-2 bg-orange-600 text-white rounded-md hover:bg-orange-500 transition-all duration-300 w-[100px] h-[40px]"
          >
            Enviar
          </button>
        </form>
      </div>
    ) : (
      <div>
        <Link
          className="py-2 px-5 bg-orange-600 text-white rounded-md hover:bg-orange-500 transition-all duration-300"
          to="/login"
        >
          Login
        </Link>
      </div>
    )}
  </div>
</div>

  );
};

export default Reviews;
