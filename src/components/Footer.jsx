import React from "react";
import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#F3F6Fa]">
      <div className="w-[85%] flex flex-wrap mx-auto border-b py-16 md-lg:pb-10 sm:pb-6">
        <div className="w-3/12 lg:w-4/12 sm:w-full">
          <div className="flex flex-col gap-3">
            <img
              className="w-[190px] h-[70x]"
              src="images/logo.png"
              alt="logo"
            />
            <ul className="flex flex-col gap-2 text-slate-600">
              <li>Endereço : Rua Maria Cava, 22, Jandira-SP</li>
              <li>Contato : +55 11 95190-6111</li>
              <li>E-mail : route66auto.info@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="w-5/12 lg:w-8/12 sm:w-full">
            <div className="flex justify-center sm:justify-start sm:mt-6 w-full">
              <div>
                <h2 className="font-bold text-lg mb-2">Links úteis</h2>
                <div className="flex justify-between gap-[80px] lg:gap-[40px]">
                  <ul className="flex flex-col gap-2 text-slate-600 text-sm">
                    <li>
                      <Link>Categorias</Link>
                    </li>
                    <li>
                      <Link>Itens com desconto</Link>
                    </li>
                    <li>
                      <Link>Seja um vendedor</Link>
                    </li>
                    <li>
                      <Link>Contate-nos</Link>
                    </li>
                    <li>
                      <Link>Trabalhe conosco</Link>
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-2 text-slate-600 text-sm">
                    <li>
                      <Link>Sobre nós</Link>
                    </li>
                    <li>
                      <Link>Sobre nossa loja</Link>
                    </li>
                    <li>
                      <Link>Informações de Entrega</Link>
                    </li>
                    <li>
                      <Link>Política de Privacidade</Link>
                    </li>
                    <li>
                      <Link>Blogs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/12 lg:w-full lg:mt-6">
            <div className="w-full flex flex-col justify-start gap-5">
              <h2 className="font-bold text-lg mb-2">Junte-se a nós</h2>
              <span>
                Tenha atualizações por e-mail das nossas últimas ofertas
              </span>
              <div className="h-[50px] w-full bg-white border relative">
                <input
                  placeholder="Digite seu e-mail"
                  className="h-full bg-transparent w-full px-3 outline-0"
                  type="text"
                />
                <button className="h-full absolute right-0 bg-orange-600 text-white uppercase px-4 font-bold text-sm">
                  Se increver
                </button>
              </div>
              <ul className="flex justify-start items-center gap-3">
                <li>
                  <a
                    className="w-[38px] h-[38px] hover:bg-orange-600 hover:text-white flex justify-center items-center bg-white rounded-full"
                    href="#"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    className="w-[38px] h-[38px] hover:bg-orange-600 hover:text-white flex justify-center items-center bg-white rounded-full"
                    href="#"
                  >
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a
                    className="w-[38px] h-[38px] hover:bg-orange-600 hover:text-white flex justify-center items-center bg-white rounded-full"
                    href="#"
                  >
                    <FaLinkedin/>
                  </a>
                </li>
                <li>
                  <a
                    className="w-[38px] h-[38px] hover:bg-orange-600 hover:text-white flex justify-center items-center bg-white rounded-full"
                    href="#"
                  >
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[85%] flex flex-wrap justify-center items-center text-slate-600 mx-auto py-5 text-center">
          <span>
            Route 66 Auto © 2025 - Todos os direitos reservados | CNPJ:{" "}
            <a className="text-blue-500 underline" href="">
              58.680.080/0001-53
            </a>
          </span>
      </div>
    </footer>
  );
};

export default Footer;
