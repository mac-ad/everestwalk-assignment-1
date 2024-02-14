import { toast } from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      selectedItemsId: [],
      totalItems: 0,
      totalCost: 0,
      addToCart: (product, quantity = 1) =>
        set((state) => {
          // check if product is already in cart
          // if product is already in cart then increment the quantity
          // else add to cart with quantity 1
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
                  quantity: quantity,
                },
              ],
              // totalCost: state.totalCost + product.price,
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
                  quantity: quantity,
                },
              ],
              totalItems: state.totalItems + 1,
              // totalCost: state.totalCost + product.price,
            };
          } else {
            let newQuantity;

            newState = {
              ...state,
              cartItems: state.cartItems.map((item) => {
                if (item.id !== product.id) return item;
                return {
                  ...item,
                  quantity: item.quantity + quantity,
                };
              }),
              // totalCost: state.totalCost + product.price,
            };
          }

          toast.success("item added to cart");

          return newState;
        }),
      removeFromCart: (productId) =>
        set((state) => {
          let newState = { ...state };

          let deletedQuantity = null;
          let deletedProductPrice = null;

          let totalCost = state.totalCost;

          let newCartItems = state.cartItems.filter((item) => {
            if (item.id === productId) {
              deletedQuantity = item.quantity;
              deletedProductPrice = item.price;
              if (state.selectedItemsId.includes(item.id)) {
                totalCost -= item.quantity * item.price;
              }
            }

            return item.id != productId;
          });

          newState = {
            ...state,
            cartItems: newCartItems,
            totalItems: state.totalItems - 1,
            totalCost: totalCost,
            // totalCost: state.totalCost - deletedProductPrice * deletedQuantity,
          };
          toast.success("item removed to cart");

          return newState;
        }),
      incrementQuantity: (id) =>
        set((state) => {
          console.log("incrementing");

          let totalCost = state.totalCost;

          const newCartItems = state.cartItems.map((item) => {
            if (item.id !== id) return item;

            if (state.selectedItemsId.includes(item.id)) {
              totalCost = state.totalCost + item.price;
            }

            return {
              ...item,
              quantity: item.quantity + 1,
            };
          });

          console.log(newCartItems);

          return {
            ...state,
            cartItems: newCartItems,
            totalCost: totalCost,
          };
        }),
      decrementQuantity: (id) =>
        set((state) => {
          console.log("decrementing");

          let totalCost = state.totalCost;

          state.cartItems.forEach((item) => {
            if (state.selectedItemsId.includes(id) && item.id === id) {
              totalCost -= item.price;
            }
          });

          console.log(totalCost);

          let newState = {
            ...state,
            cartItems: state.cartItems.map((item) => {
              if (item.id !== id) return item;
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }),
            totalCost: totalCost,
          };

          return newState;
        }),
      removeSelectedId: (id) =>
        set((state) => {
          const removedItem = state.cartItems.filter((item) => item.id === id);

          const newSelectedIds = state.selectedItemsId.filter(
            (item) => item != id
          );

          console.log(removedItem);

          return {
            ...state,
            selectedItemsId: newSelectedIds,
            totalCost:
              state.totalCost - removedItem[0].price * removedItem[0].quantity,
          };
        }),
      addSelectedId: (id) =>
        set((state) => {
          const newSelectedIds = [...state.selectedItemsId, id];

          const selectedItems = state.cartItems.filter((item) =>
            newSelectedIds.includes(item.id)
          );

          let totalCost = 0;

          selectedItems.forEach((item) => {
            totalCost += item.price * item.quantity;
          });

          return {
            ...state,
            selectedItemsId: newSelectedIds,
            totalCost: totalCost,
          };
        }),
      placeItemsAfterStep: () =>
        set((state) => {
          const newCartItems = state.cartItems.filter(
            (item) => !state.selectedItemsId.includes(item.id)
          );

          const newState = {
            ...state,
            cartItems: newCartItems,
            selectedItemsId: [],
            totalCost: 0,
            totalItems: state.totalItems - state.selectedItemsId.length,
          };

          toast.success("Order placed successfully");

          return newState;
        }),
    }),
    {
      name: "cart",
    }
  )
);
