import React, { useState } from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import { useLocation, Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Shipping = () => {
  const { state: { products } } = useLocation();
  const [res, setRes] = useState(false);
  const [state, setState] = useState({
    name: "",
    address: "",
    phone: "",
    cep: "",
    city: "",
    uf: "",
  });
  const inputHandle = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]:
        name === "cep"
          ? formatCEP(value)
          : name === "phone"
          ? formatPhone(value)
          : value,
    });
  };
  const save = (e) => {
    e.preventDefault();
    const { name, address, phone, cep, city, uf } = state;
    if (name && address && phone && cep && city && uf) {
      setRes(true);
    }
  };
  const formatCEP = (value) => {
    return value
      .replace(/\D/g, "") // Remove caracteres não numéricos
      .replace(/^(\d{5})(\d)/, "$1-$2") // Adiciona o traço após os primeiros 5 dígitos
      .substring(0, 9); // Limita o comprimento a 9 caracteres
  };
  const formatPhone = (value) => {
    return value
      .replace(/\D/g, "") // Remove caracteres não numéricos
      .replace(/^(\d{2})(\d)/, "($1) $2") // Adiciona parênteses em torno do DDD
      .replace(/(\d{4,5})(\d{4})$/, "$1-$2") // Adiciona o traço
      .substring(0, 15); // Limita o comprimento total a 15 caracteres
  };
  console.log(products)
  return (
    <div>
      <Headers />
      <section className="bg-[url('/images/banner/order.jpg')] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left">
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-xl font-bold">Route 66 AUTO</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Inicio</Link>
                <span className="pt-2">
                  <MdOutlineKeyboardArrowRight />
                </span>
                <span>Fazer Pedido</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#eeeeee]">
        <div className="w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90] mx-auto py-16">
          <div className="w-full flex flex-wrap">
            <div className="w-[67%] md-lg:w-full">
              <div className="flex flex-col gap-3">
                <div className="bg-white p-6 shadow-sm rounded-md">
                  {!res && (
                    <>
                      <h2 className="text-slate-600 font-bold pb-3">
                        Informações de Envio
                      </h2>
                      <form onSubmit={save}>
                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="name">Nome</label>
                            <input
                              onChange={inputHandle}
                              value={state.name}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-orange-600 rounded-md"
                              name="name"
                              placeholder="nome completo"
                              id="name"
                              required
                            />
                          </div>
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="name">Endereço</label>
                            <input
                              onChange={inputHandle}
                              value={state.address}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-orange-600 rounded-md"
                              name="address"
                              placeholder="rua / número / complemento / bairro"
                              id="address"
                              required
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="name">Celular</label>
                            <input
                              onChange={inputHandle}
                              value={state.phone}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-orange-600 rounded-md"
                              name="phone"
                              placeholder="número de celular"
                              id="phone"
                              required
                            />
                          </div>
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="name">CEP</label>
                            <input
                              onChange={inputHandle}
                              value={state.cep}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-orange-600 rounded-md"
                              name="cep"
                              placeholder="CEP"
                              id="cep"
                              required
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="name">Cidade</label>
                            <input
                              onChange={inputHandle}
                              value={state.city}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-orange-600 rounded-md"
                              name="city"
                              placeholder="cidade"
                              id="city"
                              required
                            />
                          </div>
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="name">Estado</label>
                            <input
                              onChange={inputHandle}
                              value={state.uf}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-orange-600 rounded-md"
                              name="uf"
                              placeholder="estado"
                              id="uf"
                              required
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600">
                          <div className="flex flex-col gap-1 mt-3 w-full">
                            <button className="px-3 py-[6px] h-[40px] w-[100px] rounded-sm hover:shadow-orange-600/20 hover:shadow-lg bg-orange-600 text-white">
                              Salvar
                            </button>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                  {res && (
                    <div className="flex flex-col gap-1">
                      <h2 className="text-slate-600 font-semibold pb-2">
                        Enviar para {state.name}
                      </h2>
                      <p>
                        <span className="bg-orange-200 text-orange-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                          Casa
                        </span>
                        <span className="text-slate-600 text-sm">
                          {state.address} {state.city} {state.uf} {state.cep}
                        </span>
                        <span
                          onClick={() => setRes(false)}
                          className="text-orange-600 cursor-pointer"
                        >
                          {" "}
                          Mudar
                        </span>
                      </p>
                      <p className="text-slate-600 text-sm">
                        E-mail para viniciusleme137@gmail.com
                      </p>
                    </div>
                  )}
                </div>
                {[1, 2].map((p, i) => (
                  <div className="flex bg-white p-4 flex-col gap-2">
                    <div className="flex justify-start items-center">
                      <h2 className="text-md text-slate-600 font-semibold">
                        Car Store
                      </h2>
                    </div>
                    {[1, 2].map((p, i) => (
                      <div className="w-full flex flex-wrap">
                        <div className="flex sm:w-full gap-2 w-7/12">
                          <div className="flex gap-2 justify-start items-center">
                            <img
                              className="w-[80px] h-[80px]"
                              src={`/images/products/${
                                i + 1
                              }.webp`}
                              alt="product image"
                            />
                            <div className="pr-4 text-slate-600">
                              <h2 className="text-md">
                                Long Sleeve casua Shirt for Man
                              </h2>
                              <span className="text-sm">Marca : Easy</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end w-5/12 sm:w-full sm:mt-3">
                          <div className="pl-4 sm:pl-0">
                            <h2 className="text-lg text-orange-600 font-semibold">
                              R$ 600,00
                            </h2>
                            <p className="line-through">R$ 630,00</p>
                            <p>-10%</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[33%] md-lg:w-full">
              <div className="pl-3 md-lg:pl-0">
                <div className="bg-white font-medium p-5 text-slate-600 flex flex-col gap-3">
                  <h2 className="text-xl font-semibold">Resumo do Pedido</h2>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total Itens</span>
                    <span>R$ 520,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Valor do Frete</span>
                    <span>R$ 12,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total Pagamento</span>
                    <span>R$ 520,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Valor Total</span>
                    <span>R$ 532,00</span>
                  </div>
                  <button
                    disabled={res ? false : true}
                    className={`px-5 py-[6px] rounded-sm hover:shadow-orange-500/20 hover:shadow-lg ${
                      res ? "bg-orange-600" : "bg-orange-300"
                    } text-sm text-white uppercase`}
                  >
                    Ir para o Pagamento
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shipping;
