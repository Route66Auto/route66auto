import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import { jwtDecode } from "jwt-decode";

export const customer_register = createAsyncThunk(
  "auth/customer_register",
  async (info, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.post("/customer/customer-register", info);
      localStorage.setItem("customerToken", data.token); // Salva o token no localStorage
      return fulfillWithValue(data); // Retorna os dados ao reducer
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const customer_login = createAsyncThunk(
  "auth/customer_login",
  async (info, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.post("/customer/customer-login", info);
      localStorage.setItem("customerToken", data.token); // Salva o token no localStorage
      return fulfillWithValue(data); // Retorna os dados ao reducer
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const decodeToken = (token) => {
  if (token) {
    const userInfo = jwtDecode(token);
    return userInfo;
  } else {
    return "";
  }
};

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    loader: false,
    userInfo: decodeToken(localStorage.getItem("customerToken")),
    errorMessage: "",
    successMessage: "",
  },
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(customer_register.pending, (state) => {
        state.loader = true; // Ativa o loader
      })
      .addCase(customer_register.rejected, (state, { payload }) => {
        state.errorMessage = payload?.error || "Ocorreu um erro";
        state.loader = false; // Desativa o loader
      })
      .addCase(customer_register.fulfilled, (state, { payload }) => {
        state.successMessage =
          payload.message || "Registro realizado com sucesso";
        state.userInfo = decodeToken(payload.token);
        state.loader = false;
      })
      .addCase(customer_login.pending, (state) => {
        state.loader = true; // Ativa o loader
      })
      .addCase(customer_login.rejected, (state, { payload }) => {
        state.errorMessage = payload?.error || "Ocorreu um erro";
        state.loader = false; // Desativa o loader
      })
      .addCase(customer_login.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message || "Login realizado com sucesso";
        state.userInfo = decodeToken(payload.token);
        state.loader = false;
      });
  },
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
