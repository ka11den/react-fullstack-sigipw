import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      if (state.products.every(p => p._id !== action.payload._id)) {
        state.products.push(action.payload)
        state.quantity += 1
        state.total += action.payload.price * action.payload.quantity
      } else {
        state.products.map(product => {
          if (product._id === action.payload._id) {
            product.quantity += 1
            state.total += action.payload.price
            return product
          }
        })
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => {
        if (product._id === action.payload._id) {
          if (product.quantity > 1) {
            product.quantity -= 1
            state.total -= action.payload.price
            return product
          } else {
            state.quantity -= 1
          }
        } else {
          return product
        }
      })
    }
  },
});

export const {addProduct, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;