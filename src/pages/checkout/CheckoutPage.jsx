import Wrapper from "../../components/HOC/Wrapper";
import WrapperSmall from "../../components/HOC/WrapperSmall";
import OrderSummary from "../cart/OrderSummary.";
import CheckoutForm from "./CheckoutForm";

const CheckoutPage = () => {
  return (
    <div className="">
      <WrapperSmall>
        <h1 className="text-2xl mt-[5em] mb-5">Checkout</h1>
        <div className="flex gap-10 ">
          <div className="w-full">
            <CheckoutForm />
          </div>
          <div className="w-full">
            <OrderSummary />
          </div>
        </div>
      </WrapperSmall>
    </div>
  );
};

export default CheckoutPage;
