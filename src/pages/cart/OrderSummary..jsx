import { Link, useLocation, useSearchParams } from "react-router-dom";
import Button from "../../components/button/Button";
import { useCartStore } from "../../store/cart";
import { twMerge } from "tailwind-merge";

const OrderSummary = () => {
  const totalCost = useCartStore((state) => state.totalCost);
  const totalItems = useCartStore((state) => state.totatlItems);

  const location = useLocation();

  return (
    <div className=" w-[100%]  min-w-[350px] lg:w-[40%] mx-auto bg-white p-5 rounded-[5px]">
      <h2 className="mb-5 font-semibold">Order summary:</h2>
      <table className="w-full ">
        <tbody className="flex flex-col gap-2">
          <tr className="flex  justify-between">
            <td>Subtotal items {totalItems}</td>
            <td className="text-right">Rs {totalCost}</td>
          </tr>
          <tr className="flex  justify-between">
            <td>Shipping fee</td>
            <td className="text-right">Rs 100</td>
          </tr>
          <tr className="flex justify-between mt-3 text-lg">
            <td>Total</td>
            <td className="text-right font-semibold">Rs {totalCost + 100}</td>
          </tr>
        </tbody>
      </table>
      {location.pathname != "/checkout" && (
        <Link to="/checkout">
          <Button className="mt-10">Proceed to Checkout</Button>
        </Link>
      )}
    </div>
  );
};

export default OrderSummary;
