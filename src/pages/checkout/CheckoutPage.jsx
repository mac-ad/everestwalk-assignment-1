import Wrapper from "../../components/HOC/Wrapper";
import WrapperSmall from "../../components/HOC/WrapperSmall";
import OrderSummary from "../cart/OrderSummary.";
import CheckoutForm from "./CheckoutForm";

const CheckoutPage = () => {
  return (
    <div className="">
      <Wrapper>
        <div className=" max-w-[500px] mx-auto md:max-w-[1200px]">
          <h1 className="text-2xl mt-[5em] mb-5">Checkout</h1>
          <div className="grid gap-20 grid-cols-1 md:grid-cols-2 items-start">
            <div className="border p-4 rounded-[5px] md:order-2 md:min-w-[350px] md:w-fit md:ml-auto">
              <OrderSummary />
            </div>
            <div className="w-full mb-10">
              <CheckoutForm />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CheckoutPage;
