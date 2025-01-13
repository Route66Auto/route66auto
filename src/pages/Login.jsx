import React, { useEffect, useState } from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import FadeLoader from "react-spinners/FadeLoader";
import { Link, useNavigate } from "react-router-dom";
import { customer_login, messageClear } from "../store/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const Login = () => {
  const { loader, successMessage, errorMessage, userInfo } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const login = (e) => {
    e.preventDefault();
    dispatch(customer_login(state));
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
            Bem-vindo (a) de volta
          </h2>
          <p className="text-center text-gray-600 mb-6 mt-2">
            Por favor, entre na sua conta abaixo
          </p>
          <form onSubmit={login} className="space-y-4">
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
                placeholder="Digite seu e-mail"
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
            <button className="w-full bg-orange-600 text-white py-2 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2">
              Entrar
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Ainda não possui uma conta?{" "}
            <Link className="text-orange-600" to="/register">
              Registrar-se
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
