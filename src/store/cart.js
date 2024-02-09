import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      totalItems: 0,
      totalCost: 0,
      addToCart: (product) =>
        set((state) => {
          // check if product is already in cart
          // if product is already in cart then increment the quantity
          // else add to cart with quantity 1
          console.log(product, state);

          let newState = { ...state };

          if (state.totalItems === 0) {
            console.log("adding new items");
            newState = {
              ...state,
              totalItems: state.totalItems + 1,
              cartItems: [
                ...state.cartItems,
                {
                  ...product,
                  quantity: 1,
                },
              ],
              totalCost: state.totalCost + product.price,
            };
          }

          const alreadyInCart = state.cartItems.some(
            (item) => item.id === product.id
          );

          if (!alreadyInCart) {
            newState = {
              ...state,
              cartItems: [
                ...state.cartItems,
                {
                  ...product,
                  quantity: 1,
                },
              ],
              totalItems: state.totalItems + 1,
              totalCost: state.totalCost + product.price,
            };
          } else {
            let newQuantity;

            newState = {
              ...state,
              cartItems: state.cartItems.map((item) => {
                if (item.id !== product.id) return item;
                return {
                  ...item,
                  quantity: item.quantity + 1,
                };
              }),
              totalCost: state.totalCost + product.price,
            };
          }

          return newState;
        }),
      removeFromCart: (productId) =>
        set((state) => {
          let newState = { ...state };

          let deletedQuantity = null;
          let deletedProductPrice = null;

          let newCartItems = state.cartItems.filter((item) => {
            if (item.id === productId) {
              deletedQuantity = item.quantity;
              deletedProductPrice = item.price;
            }
            return item.id != productId;
          });

          newState = {
            ...state,
            cartItems: newCartItems,
            totalItems: state.totalItems - 1,
            totalCost: state.totalCost - deletedProductPrice * deletedQuantity,
          };

          return newState;
        }),
      incrementQuantity: (id) =>
        set((state) => {
          console.log("incrementing");

          return state;
        }),
      decrementQuantity: (product) =>
        set((state) => {
          console.log("decrementing");

          let newState = {
            ...state,
            cartItems: state.cartItems.map((item) => {
              if (item.id !== product.id) return item;
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }),
            totalCost: state.totalCost - product.price,
          };

          return newState;
        }),
    }),
    {
      name: "cart",
    }
  )
);
