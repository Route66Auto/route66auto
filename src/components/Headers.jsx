import React, { useState } from "react";
import { GrMail } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaList, FaLock, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaYoutube, FaInstagram, FaUser } from "react-icons/fa";
import { AiFillHeart, AiFillShopping } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Headers = () => {
  const navigate = useNavigate();
  const { categorys } = useSelector((state) => state.home);
  const { userInfo } = useSelector((state) => state.auth);
  const { card_product_count } = useSelector((state) => state.card);

  const { pathname } = useLocation();
  const [showShidebar, setShowShidebar] = useState(true);
  const [categoryShow, setCategoryShow] = useState(true);
  const user = false;
  const wishlist = 4;
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");

  const search = () => {
    navigate(`/products/search?category=${category}&&value=${searchValue}`);
  };

  const redirect_card_page = () => {
    if (userInfo) {
      navigate("/card");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="w-full">
      <div className="header-top bg-gray-200 md-lg:hidden shadow-md">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="flex w-full justify-between items-center h-12 text-gray-600">
            <ul className="flex justify-start items-center gap-8">
              <li className="flex relative justify-center items-center gap-2 text-sm after:absolute after:h-4 after:w-[1px] after:bg-gray-400 after:-right-4">
                <span>
                  <GrMail />
                </span>
                <span>comercial.route66auto@gmail.com</span>
              </li>
              <span className="text-green-600 font-semibold">
                Promoção de Inauguração - 30%
              </span>
            </ul>
            <div className="flex justify-center items-center gap-10">
              <div className="flex justify-center items-center gap-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-600 transition duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-600 transition duration-300"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-600 transition duration-300"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-600 transition duration-300"
                >
                  <FaYoutube />
                </a>
              </div>
              <div className="flex group cursor-pointer text-gray-800 text-sm justify-center items-center gap-1 relative after:h-4 after:w-[1px] after:bg-gray-400 after:-right-4 after:absolute before:absolute before:h-4 before:bg-gray-400 before:w-[1px] before:-left-5">
                <img
                  src="../../public/images/logo.png"
                  alt=""
                  className="w-6 h-6"
                />
                <span>
                  <MdOutlineKeyboardArrowDown />
                </span>
                <ul className="absolute invisible transition-all rounded-sm duration-200 bg-black text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 z-10">
                  <li>English</li>
                </ul>
              </div>
              {userInfo ? (
                <Link
                  className="flex cursor-pointer justify-center items-center gap-2 text-sm"
                  to="/dashboard"
                >
                  <span>
                    <FaUser />
                  </span>
                  <span>{userInfo.name}</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex cursor-pointer justify-center items-center gap-2 text-sm"
                >
                  <span>
                    <FaLock />
                  </span>
                  <span>Entrar</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md h-[105px]">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="h-[80px] md-lg:h-[100px] flex justify-between items-center flex-wrap">
            <div className="md-lg:w-full w-3/12 relative">
              <div className="flex justify-between items-center">
                <Link to="/">
                  <img
                    className="w-[110px] h-[110px] md:w-[120px] md:h-[120px] transition-all duration-300"
                    src="../../public/images/logo.png"
                    alt="logo"
                  />
                </Link>
                <div
                  className="justify-center items-center w-8 h-8 bg-white text-gray-600 border border-gray-600 rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden"
                  onClick={() => setShowShidebar(false)}
                >
                  <span>
                    <FaList />
                  </span>
                </div>
              </div>
            </div>
            <div className="md-lg:w-full w-9/12 mb-1">
              <div className="flex justify-between md-lg:justify-center items-center flex-wrap pl-8">
                <ul className="flex justify-start items-start gap-8 text-sm font-bold uppercase md-lg:hidden">
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/" ? "text-orange-600" : "text-gray-600"
                      }`}
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shops"
                      className={`p-2 block ${
                        pathname === "/shop"
                          ? "text-orange-600"
                          : "text-gray-600"
                      }`}
                    >
                      Produtos
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/blog"
                          ? "text-orange-600"
                          : "text-gray-600"
                      }`}
                    >
                      Promoções
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/about"
                          ? "text-orange-600"
                          : "text-gray-600"
                      }`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/contact"
                          ? "text-orange-600"
                          : "text-gray-600"
                      }`}
                    >
                      Sobre
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/contact"
                          ? "text-orange-600"
                          : "text-gray-600"
                      }`}
                    >
                      Contato
                    </Link>
                  </li>
                </ul>
                <div className="flex md-lg:hidden justify-center items-center gap-5">
                  <div className="flex justify-center gap-5">
                    <div className="relative flex justify-center items-center cursor-pointer w-9 h-9 rounded-full bg-gray-200">
                      <span className="text-xl text-red-500">
                        <AiFillHeart />
                      </span>
                      <div className="w-5 h-5 absolute bg-green-500 rounded-full text-white flex justify-center items-center -top-1 -right-1">
                        {wishlist}
                      </div>
                    </div>
                    <div
                      onClick={redirect_card_page}
                      className="relative flex justify-center items-center cursor-pointer w-9 h-9 rounded-full bg-gray-200"
                    >
                      <span className="text-xl text-orange-500">
                        <AiFillShopping />
                      </span>
                      {card_product_count !== 0 && (
                        <div className="w-5 h-5 absolute bg-green-500 rounded-full text-white flex justify-center items-center -top-1 -right-1 text-[12px]">
                          {card_product_count}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md-lg:block">
        <div
          onClick={() => setShowShidebar(true)}
          className={`fixed duration-200 transition-all ${
            showShidebar ? "invisible" : "visible"
          } hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 z-20`}
        ></div>
        <div
          className={`fixed w-[300px] z-[9999] transition-all duration-200 ${
            showShidebar ? "-left-[300px]" : "left-0"
          } top-0 overflow-y-auto bg-white h-screen py-6 px-8`}
        >
          <div className="flex justify-start flex-col gap-6">
            <Link to="/">
              <img
                className="w-[120px] h-[120px]"
                src="../../public/images/logo.png"
                alt="logo"
              />
            </Link>
            <div className="flex justify-start items-center gap-10">
              <div className="flex group cursor-pointer text-gray-800 text-sm justify-center items-center gap-1 relative after:h-4 after:w-[1px] after:bg-gray-400 after:-right-4 after:absolute">
                <img
                  src="../../public/images/language.png"
                  alt=""
                  className="w-6 h-6"
                />
                <span>
                  <MdOutlineKeyboardArrowDown />
                </span>
                <ul className="absolute invisible transition-all rounded-sm duration-200 bg-black text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 z-10">
                  <li>English</li>
                </ul>
              </div>
              {userInfo ? (
                <Link
                  className="flex cursor-pointer justify-center items-center gap-2 text-sm"
                  to="/dashboard"
                >
                  <span>
                    <FaUser />
                  </span>
                  <span>{userInfo.name}</span>
                </Link>
              ) : (
                <div className="flex cursor-pointer justify-center items-center gap-2 text-sm">
                  <span>
                    <FaLock />
                  </span>
                  <span>Entrar</span>
                </div>
              )}
            </div>
            <ul className="flex flex-col justify-start items-start text-md font-semibold uppercase">
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/" ? "text-orange-600" : "text-gray-600"
                  }`}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/shops"
                  className={`py-2 block ${
                    pathname === "/shop" ? "text-orange-600" : "text-gray-600"
                  }`}
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/blog" ? "text-orange-600" : "text-gray-600"
                  }`}
                >
                  Promoções
                </Link>
              </li>
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/about" ? "text-orange-600" : "text-gray-600"
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/contact"
                      ? "text-orange-600"
                      : "text-gray-600"
                  }`}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/contact"
                      ? "text-orange-600"
                      : "text-gray-600"
                  }`}
                >
                  Contato
                </Link>
              </li>
            </ul>
            <div className="flex justify-start items-center gap-4">
              <a
                href="#"
                className="text-gray-600 hover:text-orange-600 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-600 transition duration-300"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-600 transition duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-600 transition duration-300"
              >
                <FaYoutube />
              </a>
            </div>
            <div className="w-full flex justify-end md-lg:justify-start gap-3 items-center">
              <div className="w-12 h-12 rounded-full flex bg-gray-200 justify-center items-center">
                <span>
                  <IoIosCall />
                </span>
              </div>
              <div className="flex justify-end flex-col gap-1">
                <h2 className="text-sm font-medium text-gray-700">
                  +55 11 95190-6111
                </h2>
                <span className="text-xs">Suporte das 08h às 20h</span>
              </div>
            </div>
            <ul className="flex flex-col justify-start items-start gap-3 text-gray-800">
              <li className="flex justify-start items-center gap-2 text-sm">
                <span>
                  <GrMail />
                </span>
                <span>comercial.route66auto@gmail.com</span>
              </li>
              <span className="text-sm font-semibold">Route 66 Auto</span>
            </ul>
          </div>
        </div>
      </div>
      <div className="shadow-lg bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="w-[85%] lg:w-[90%] mx-auto py-8">
          <div className="flex w-full flex-wrap md-lg:gap-8">
            <div className="w-3/12 md-lg:w-full">
              <div className="bg-white rounded-lg shadow-md relative">
                <div
                  onClick={() => setCategoryShow(!categoryShow)}
                  className="h-[50px] bg-white text-gray-700 flex justify-center md-lg:justify-between md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer hover:bg-gray-100 transition duration-200 rounded-full"
                >
                  <div className="flex justify-center items-center gap-3">
                    <span>
                      <FaList />
                    </span>
                    <span>Categorias</span>
                  </div>
                  <span className="pt-1">
                    <MdOutlineKeyboardArrowDown />
                  </span>
                </div>
                <div
                  className={`${
                    categoryShow ? "h-0" : "h-[400px]"
                  } overflow-hidden transition-all md-lg:relative duration-500 absolute z-[99999] bg-white w-full border-x rounded-b-lg`}
                >
                  <ul className="py-2 text-gray-700 font-medium h-full overflow-auto">
                    {categorys.map((c, i) => (
                      <li
                        key={i}
                        className="flex justify-start items-center gap-2 px-[24px] py-[6px] hover:bg-gray-100 transition duration-200"
                      >
                        <img
                          src={c.image}
                          className="w-[30px] h-[30px] rounded-full overflow-hidden"
                          alt={c.name}
                        />
                        <Link
                          to={`/products?category=${c.name}`}
                          className="text-sm block"
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-9/12 pl-8 md-lg:pl-0 md-lg:w-full">
              <div className="flex flex-wrap w-full justify-between items-center md-lg:gap-6">
                <div className="w-8/12 md-lg:w-full bg-white rounded-lg shadow-md p-1">
                  <div className="flex border h-[40px] items-center relative gap-5 rounded-md overflow-hidden">
                    <div className="relative after:absolute after:h-[20px] after:w-[1px] after:bg-gray-300 after:-right-[10px] md:hidden">
                      <select
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-[150px] text-gray-700 font-semibold bg-transparent px-2 h-full outline-none border-none"
                      >
                        <option value="">Selecionar</option>
                        {categorys.map((c, i) => (
                          <option key={i} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <input
                      className="w-full relative bg-transparent text-gray-700 outline-none px-3 h-full"
                      onChange={(e) => setSearchValue(e.target.value)}
                      type="text"
                      placeholder="Do que você precisa?"
                    />
                    <button
                      onClick={search}
                      className="bg-orange-500 text-white px-6 h-full font-semibold hover:bg-orange-600 transition duration-200"
                    >
                      Pesquisar
                    </button>
                  </div>
                </div>
                <div className="w-4/12 block md-lg:hidden pl-2 md-lg:w-full md-lg:pl-0">
                  <div className="w-full flex justify-end md-lg:justify-start gap-3 items-center">
                    <div className="w-10 h-10 rounded-full flex bg-orange-100 justify-center items-center shadow-md">
                      <span className="text-orange-500">
                        <IoIosCall />
                      </span>
                    </div>
                    <div className="flex justify-end flex-col gap-1">
                      <h2 className="text-md font-medium text-white">
                        +55 11 95190-6111
                      </h2>
                      <span className="text-sm text-white">
                        Suporte das 08h às 20h
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
