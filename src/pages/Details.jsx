import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import Ratings from "../components/Ratings";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { AiFillHeart } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import Reviews from "../components/Reviews";
const Details = () => {
  const [image, setImage] = useState("");
  const [state, setState] = useState("reviews");
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mdtablet: {
      breakpoint: { max: 991, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
    },
    smmobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
    },
    xsmobile: {
      breakpoint: { max: 440, min: 0 },
      items: 1,
    },
  };

  const images = [1, 2, 3, 4, 5, 6, 7];
  const discount = 10;
  const stock = 5;

  return (
    <div>
      <Headers />
      <div className="bg-[url('http://localhost:3000/images/banner/order.jpg')] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left">
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-xl font-bold">Route 66 AUTO</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 py-5 mb-5">
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
          <div className="flex justify-start items-center text-md text-slate-600 w-full">
            <Link to="/">Inicio</Link>
            <span className="pt-1">
              <MdOutlineKeyboardArrowRight />
            </span>
            <Link to="/">Peças</Link>
            <span className="pt-1">
              <MdOutlineKeyboardArrowRight />
            </span>
            <span>Peça de Caminhão Mercedes</span>
          </div>
        </div>
      </div>
      <section>
        <div className="w-[85%] md:w-[90%] lg:w-[80%] h-full mx-auto pb-16">
          <div className="grid grid-cols-2 md-lg:grid-cols-1 gap-8">
            {/* Seção de imagem */}
            <div>
              <div className="p-5 border rounded-lg shadow-md bg-white">
                <img
                  className="h-[400px] w-full object-contain rounded-md"
                  src={
                    image
                      ? `http://localhost:3000/images/products/${image}.webp`
                      : `http://localhost:3000/images/products/${images[1]}.webp`
                  }
                  alt="Produto"
                />
              </div>
              {images && (
                <div className="py-3">
                  <Carousel
                    autoPlay
                    infinite
                    responsive={responsive}
                    transitionDuration={500}
                  >
                    {images.map((img, i) => (
                      <div
                        key={i}
                        className="cursor-pointer"
                        onClick={() => setImage(img)}
                      >
                        <img
                          className="w-[80px] h-[80px] object-contain rounded-md border hover:shadow-md transition"
                          src={`http://localhost:3000/images/products/${img}.webp`}
                          alt={`Produto ${i}`}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              )}
            </div>

            {/* Seção de detalhes */}
            <div className="flex flex-col gap-6">
              {/* Título */}
              <h2 className="text-3xl font-bold text-slate-800">
                Peça de Caminhão Mercedes
              </h2>

              {/* Avaliações */}
              <div className="flex items-center gap-4">
                <div className="flex text-xl text-orange-500">
                  <Ratings ratings={4.5} />
                </div>
                <span className="text-green-600">(23 reviews)</span>
              </div>

              {/* Preço */}
              <div className="text-2xl flex items-center gap-3">
                {discount ? (
                  <>
                    <span className="line-through text-slate-500">
                      R$ 500,00
                    </span>
                    <span className="text-orange-600 font-bold">
                      R$ {500 - Math.floor((500 * discount) / 100)},00
                    </span>
                    <span className="text-green-600 font-semibold">
                      (-{discount}%)
                    </span>
                  </>
                ) : (
                  <span className="text-orange-600 font-bold">R$ 500,00</span>
                )}
              </div>

              {/* Descrição */}
              <p className="text-slate-600 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>

              {/* Quantidade e Ações */}
              <div className="flex items-center gap-3 border-b pb-6">
                {stock ? (
                  <>
                    <div className="flex bg-slate-200 h-[50px] items-center rounded-md">
                      <button className="px-4 py-2 text-xl hover:bg-slate-300">
                        -
                      </button>
                      <span className="px-5 text-lg">5</span>
                      <button className="px-4 py-2 text-xl hover:bg-slate-300">
                        +
                      </button>
                    </div>
                    <button className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
                      Adicionar ao Carrinho
                    </button>
                  </>
                ) : (
                  <span className="text-red-600 font-semibold">
                    Fora de estoque
                  </span>
                )}
                <button className="h-[50px] w-[50px] flex items-center justify-center bg-red-600 text-white rounded-md shadow hover:bg-red-700">
                  <AiFillHeart />
                </button>
              </div>

              {/* Disponibilidade e Compartilhamento */}
              <div className="flex items-start gap-6">
                <div className="text-lg font-semibold text-slate-800">
                  <p>Disponibilidade</p>
                  <p>Compartilhe</p>
                </div>
                <div>
                  <p className={`text-${stock ? "green" : "red"}-600`}>
                    {stock ? `Em estoque (${stock})` : "Fora de estoque"}
                  </p>
                  <ul className="flex gap-3 mt-2">
                    <li>
                      <a
                        className="w-[38px] h-[38px] flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600"
                        href="#"
                      >
                        <FaWhatsapp />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[38px] h-[38px] flex items-center justify-center bg-pink-600 text-white rounded-full hover:bg-pink-700"
                        href="#"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[38px] h-[38px] flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600"
                        href="#"
                      >
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[38px] h-[38px] flex items-center justify-center bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
                        href="#"
                      >
                        <FaXTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Botões de ação */}
              <div className="flex gap-4">
                {stock && (
                  <button className="px-6 py-3 bg-orange-600 text-white rounded-md shadow hover:bg-orange-700">
                    Comprar Agora
                  </button>
                )}
                <button className="px-6 py-3 bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700">
                  Chat Vendedor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto pb-16">
          <div className="flex flex-wrap">
            <div className="w-[72%] md-lg:w-full">
              <div className="pr-4 md-lg:pl-0">
                <div className="grid grid-cols-2">
                  <button
                    onClick={() => setState("reviews")}
                    className={`py-1 px-5 hover:text-white hover:bg-orange-600 ${
                      state === "reviews"
                        ? "bg-orange-600 text-white"
                        : "bg-slate-200 text-slate-700"
                    } rounded-sm`}
                  >
                    Reviews
                  </button>
                  <button
                    onClick={() => setState("description")}
                    className={`py-1 px-5 hover:text-white hover:bg-orange-600 ${
                      state === "description"
                        ? "bg-orange-600 text-white"
                        : "bg-slate-200 text-slate-700"
                    } rounded-sm`}
                  >
                    Descrição
                  </button>
                </div>
                <div>
                  {state === "reviews" ? (
                    <Reviews />
                  ) : (
                    <p className="py-5 text-slate-600">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-[28%] md-lg:w-full mt-3">
              <div className="pr-4 md-lg:pl-0">
                <div className="px-3 py-2 text-slate-600 bg-slate-200 rounded-md shadow-md">
                  <h2 className="text-lg font-semibold">
                    Produtos de Car Store
                  </h2>
                </div>
                <div className="flex flex-col gap-5 mt-5 border p-3 bg-white rounded-md shadow-lg">
                  {[1, 2, 3].map((p, i) => {
                    return (
                      <Link key={i} className="block group">
                        <div className="relative h-[270px] rounded-md overflow-hidden shadow-md">
                          <img
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                            src={`http://localhost:3000/images/products/${p}.webp`}
                            alt={`Produto ${p}`}
                          />
                          <div className="absolute text-white bg-red-500 font-semibold text-xs rounded-full px-2 py-1 left-2 top-2 shadow-md">
                            6%
                          </div>
                        </div>
                        <h2 className="text-slate-700 py-2 text-md font-semibold group-hover:text-orange-600 transition-colors">
                          Produto Exclusivo {p}
                        </h2>
                        <div className="flex items-center gap-2">
                          <Ratings ratings={4.5} />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
          <h2 className="text-2xl py-3 text-slate-700 font-bold tracking-wide border-b border-gray-300">
            Produtos Relacionados
          </h2>
          <div className="mt-6">
            <Swiper
              slidesPerView="auto"
              breakpoints={{
                1280: {
                  slidesPerView: 3,
                },
                565: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={25}
              loop={true}
              pagination={{
                clickable: true,
                el: ".custom_bullet",
                renderBullet: (index, className) =>
                  `<span class="${className} w-4 h-4 bg-gray-300 hover:bg-gray-500 rounded-full mx-1 transition-all duration-300"></span>`,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {[1, 2, 3, 4, 5, 6, 7].map((p, i) => {
                return (
                  <SwiperSlide key={i} className="group">
                    <Link className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                      <div className="relative h-[270px]">
                        <img
                          className="w-full h-full object-contain"
                          src={`http://localhost:3000/images/products/${p}.webp`}
                          alt={`Produto ${p}`}
                        />
                        <div className="absolute h-full w-full top-0 left-0 bg-black opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <div className="absolute text-white bg-red-500 font-semibold text-xs rounded-full px-2 py-1 left-2 top-2 shadow-md">
                          6%
                        </div>
                      </div>
                      <div className="p-4 flex flex-col gap-2">
                        <h2 className="text-slate-700 text-lg font-semibold group-hover:text-orange-600 transition-colors duration-300">
                          Aboraf sajhr fydshf djufdg
                        </h2>
                        <div className="flex justify-between items-center">
                          <h2 className="text-orange-600 text-lg font-bold">
                            R$ 500,00
                          </h2>
                          <div className="flex">
                            <Ratings ratings={4.5} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="w-full flex justify-center items-center py-10">
            <div className="custom_bullet flex justify-center gap-3 !w-auto"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Details;
