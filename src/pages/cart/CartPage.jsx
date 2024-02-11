import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "../../components/HOC/Wrapper";
import WrapperSmall from "../../components/HOC/WrapperSmall";
import { useCartStore } from "../../store/cart";
import CartItemsContainer from "./CartItemsContainer";
import OrderSummary from "./OrderSummary.";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartPage = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <div className="py-10">
      <WrapperSmall>
        <h2 className="text-3xl mb-10">Cart</h2>
        <div className="flex flex-col lg:flex-row gap-[5em] justify-between items-start">
          <div className="w-full flex flex-col mx-auto md:max-w-[700px] ">
            {totalItems === 0 ? (
              <div className="border-dotted border-gray-500 border-2 min-h-[150px] mt-5 flex justify-center flex-col gap-2 items-center">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="text-3xl opacity-70"
                />
                "...no items in cart"
              </div>
            ) : (
              <CartItemsContainer items={cartItems} />
            )}
          </div>
          <OrderSummary />
        </div>
      </WrapperSmall>
    </div>
  );
};

export default CartPage;
