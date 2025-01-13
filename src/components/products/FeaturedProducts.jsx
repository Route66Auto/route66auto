import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Ratings from "../Ratings";
import { add_to_card, messageClear } from "../../store/reducers/cardReducer";

const FeaturedProducts = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { successMessage, errorMessage } = useSelector((state) => state.card);

  const add_card = (id) => {
    if (userInfo) {
      dispatch(
        add_to_card({
          userId: userInfo.id,
          quantity: 1,
          productId: id,
        })
      );
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [errorMessage, successMessage]);
  return (
    <div className="w-[85%] mx-auto">
      {/* Título da seção */}
      <div className="w-full text-center mb-10">
        <h2 className="text-2xl text-center font-semibold text-gray-800">
          Produtos em Destaque
        </h2>
        <div className="w-[100px] h-[3px] bg-orange-600 mx-auto mt-4 rounded"></div>
      </div>

      {/* Grade de Produtos */}
      <div className="grid grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
          >
            {/* Imagem do Produto */}
            <div className="relative overflow-hidden rounded-t-lg">
              {p.discount ? (
                <div className="absolute text-white bg-red-500 font-semibold text-xs rounded-full px-2 py-1 left-2 top-2 shadow-md">
                  {p.discount}%
                </div>
              ) : (
                ""
              )}
              <img
                className="w-full h-[180px] object-contain" // Tamanho reduzido
                src={p.images[0]}
                alt="Imagem do produto"
              />
              {/* Ícones sobre a imagem */}
              <ul className="flex justify-center items-center gap-2 absolute bottom-[-40px] group-hover:bottom-3 w-full transition-all duration-500">
                <li className="bg-white w-[32px] h-[32px] flex justify-center items-center rounded-full text-slate-600 shadow-md hover:bg-orange-600 hover:text-white transition-all duration-300 cursor-pointer text-sm">
                  <AiFillHeart />
                </li>
                <Link
                  to="/product/details/sfsffs"
                  className="bg-white w-[32px] h-[32px] flex justify-center items-center rounded-full text-slate-600 shadow-md hover:bg-orange-600 hover:text-white transition-all duration-300 text-sm"
                >
                  <FaEye />
                </Link>
                <li
                  onClick={() => add_card(p._id)}
                  className="bg-white w-[32px] h-[32px] flex justify-center items-center rounded-full text-slate-600 shadow-md hover:bg-orange-600 hover:text-white transition-all duration-300 cursor-pointer text-sm"
                >
                  <AiOutlineShoppingCart />
                </li>
              </ul>
            </div>
            {/* Detalhes do Produto */}
            <div className="px-3 py-2 text-slate-700">
              <h3 className="font-medium text-sm truncate">{p.name}</h3>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm font-bold text-orange-600">
                  R$ {p.price}
                </span>
              </div>
              <div className="mt-2">
                <Ratings ratings={p.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
