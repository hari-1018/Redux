import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: [],
  cartCount: 0,
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;

      // Check if the product already exists in the cart
      const existingProduct = state.cartList.find(item => item.id === product.id);

      if (existingProduct) {
        // Increment quantity if product is already in the cart
        existingProduct.quantity++;
      } else {
        // Add new product to cart with initial quantity
        state.cartList.push({ ...product, quantity: 1 });
      }
      state.cartCount++; // Increment total cart count
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.cartList.find(item => item.id === productId);

      if (product) {
        product.quantity++;
        state.cartCount++;
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.cartList.find(item => item.id === productId);

      if (product && product.quantity > 0) {
        product.quantity--;
        state.cartCount--;
      }

      // Optionally, remove product from the cart if quantity is 0
      if (product.quantity === 0) {
        state.cartList = state.cartList.filter(item => item.id !== productId);
      }
    },
  },
});

export const { addProductToCart, incrementQuantity, decrementQuantity } = slice.actions;
export default slice.reducer;
