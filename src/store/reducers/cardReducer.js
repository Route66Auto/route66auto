import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const add_to_card = createAsyncThunk(
  'card/add_to_card',
  async (info, {
      rejectWithValue,
      fulfillWithValue
  }) => {
      try {
          const {
              data
          } = await api.post('/home/product/add-to-card', info)
          return fulfillWithValue(data)
      } catch (error) {
          console.log(error.response)
          return rejectWithValue(error.response.data)
      }
  }
)

export const get_card_products = createAsyncThunk(
  'card/get_card_products',
  async (userId, {
      rejectWithValue,
      fulfillWithValue
  }) => {
      try {
          const {
              data
          } = await api.get(`/home/product/get-card-product/${userId}`)
          return fulfillWithValue(data)
      } catch (error) {
          return rejectWithValue(error.response.data)
      }
  }
)

export const delete_card_product = createAsyncThunk(
  'card/delete_card_product',
  async (card_id, {
      rejectWithValue,
      fulfillWithValue
  }) => {
      try {
          const {
              data
          } = await api.delete(`/home/product/delete-card-product/${card_id}`)
          return fulfillWithValue(data)
      } catch (error) {
          return rejectWithValue(error.response.data)
      }
  }
)


export const quantity_inc = createAsyncThunk(
  'card/quantity_inc',
  async (card_id, {
      rejectWithValue,
      fulfillWithValue
  }) => {
      try {
          const {
              data
          } = await api.put(`/home/product/quantity-inc/${card_id}`)
          return fulfillWithValue(data)
      } catch (error) {
          return rejectWithValue(error.response.data)
      }
  }
)

export const quantity_dec = createAsyncThunk(
  'card/quantity_dec',
  async (card_id, {
      rejectWithValue,
      fulfillWithValue
  }) => {
      try {
          const {
              data
          } = await api.put(`/home/product/quantity-dec/${card_id}`)
          return fulfillWithValue(data)
      } catch (error) {
          return rejectWithValue(error.response.data)
      }
  }
)

export const cardReducer = createSlice({
  name: 'card',
  initialState: {
      card_products: [],
      card_product_count: 0,
      buy_product_item: 0,
      price: 0,
      errorMessage: '',
      successMessage: '',
      shipping_fee: 0,
      outofstock_products: []
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(add_to_card.rejected, (state, { payload }) => {
            state.errorMessage = payload.error;
        })
        .addCase(add_to_card.fulfilled, (state, { payload }) => {
            state.successMessage = payload.message;
            state.card_product_count = state.card_product_count + 1;
        })
        .addCase(get_card_products.fulfilled, (state, { payload }) => {
            state.card_products = payload.card_products;
            state.price = payload.price;
            state.card_product_count = payload.card_product_count;
            state.shipping_fee = payload.shipping_fee;
            state.outofstock_products = payload.outOfStockProduct;
            state.buy_product_item = payload.buy_product_item;
        })
        .addCase(delete_card_product.fulfilled, (state, { payload }) => {
            state.successMessage = payload.message;
        })
        .addCase(quantity_inc.fulfilled, (state, { payload }) => {
            state.successMessage = payload.message;
        })
        .addCase(quantity_dec.fulfilled, (state, { payload }) => {
            state.successMessage = payload.message;
        });
},
});

export const { messageClear } = cardReducer.actions;
export default cardReducer.reducer;
