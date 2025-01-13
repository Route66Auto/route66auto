import React, { useEffect, useState } from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import FadeLoader from "react-spinners/FadeLoader";
import { Link, useNavigate } from "react-router-dom";
import { customer_register, messageClear } from "../store/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
const Register = () => {
  const navigate = useNavigate();
  const { loader, successMessage, errorMessage, userInfo } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    cpf: "",
    phone: "",
    email: "",
    password: "",
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const register = (e) => {
    e.preventDefault();
    dispatch(customer_register(state));
  };
  const handleCPFInput = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (value.length > 11) value = value.slice(0, 11); // Limita a 11 números

    // Formata o valor no padrão CPF
    const formattedValue = value
      .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona o primeiro ponto
      .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona o segundo ponto
      .replace(/(\d{3})(\d{2})$/, "$1-$2"); // Adiciona o traço

    e.target.value = formattedValue;
  };
  const handleCellphoneInput = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número
    if (value.length > 11) value = value.slice(0, 11); // Limita o valor a 11 dígitos

    // Formata no padrão brasileiro: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    const formattedValue = value
      .replace(/^(\d{2})(\d)/, "($1) $2") // Adiciona os parênteses ao DDD
      .replace(/(\d{4,5})(\d{4})$/, "$1-$2"); // Formata o número com o hífen

    e.target.value = formattedValue;
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
    if(userInfo){
      navigate('/')
    }
  }, [successMessage, errorMessage]);

  return (
    <div>
      {loader && (
        <div className="w-screen h-screen flex justify-center items-center fixed left-0 top-0 bg-[#38303033] z-[999]">
          <FadeLoader />
        </div>
      )}
      <Headers />
      <div className="py-10 flex items-center justify-center bg-slate-200">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Criar Conta
          </h2>
          <p className="text-center text-gray-600 mb-6 mt-2">
            Bem-vindo! Por favor, preencha os campos abaixo
          </p>

          <form onSubmit={register} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome Completo
              </label>
              <input
                onChange={inputHandle}
                value={state.name}
                name="name"
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div>
              <label
                htmlFor="cpf"
                className="block text-sm font-medium text-gray-700"
              >
                CPF
              </label>
              <input
                onChange={inputHandle}
                value={state.cpf}
                name="cpf"
                type="text"
                id="cpf"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                placeholder="000.000.000-00"
                maxLength="14"
                required
                onInput={(e) => handleCPFInput(e)}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Celular
              </label>
              <input
                onChange={inputHandle}
                value={state.phone}
                name="phone"
                type="text"
                id="phone"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                placeholder="(00) 00000-0000"
                maxLength="15" // Limite máximo de caracteres formatados
                required
                onInput={(e) => handleCellphoneInput(e)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                onChange={inputHandle}
                value={state.email}
                name="email"
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                placeholder="Digite um e-mail"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <input
                onChange={inputHandle}
                value={state.password}
                name="password"
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                placeholder="Crie uma senha"
                required
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                Concordo com os{" "}
                <Link className="text-orange-600" to="/termos">
                  Termos de Serviços & Privacidade
                </Link>
              </label>
            </div>

            <button className="w-full bg-orange-600 text-white py-2 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2">
              Registrar-se
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Já possui uma conta?{" "}
            <Link className="text-orange-600" to="/login">
              Entrar agora
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
