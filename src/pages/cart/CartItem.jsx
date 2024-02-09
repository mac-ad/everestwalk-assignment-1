import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/button/Button";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCartStore } from "../../store/cart";
import QuantityController from "./QuantityController";

const CartItem = ({ detail, extraControl }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalCost = useCartStore((state) => state.totalCost);

  return (
    <tr className="  border-[rgba(0,0,0,.2)] border rounded-md  ">
      <td className="flex gap-4 items-start p-4">
        <div className="h-[45px] w-[45px] overflow-hidden rounded-sm">
          <img
            className="w-full h-full object-cover"
            src={detail?.thumbnail}
            alt=""
          />
        </div>
        <div className="mt-[-3px]">
          <h4 className="text-sm opacity-100 font-semibold">{detail.title}</h4>
        </div>
      </td>
      <td className="p-4">Rs. {detail.price}</td>
      <td className="p-4">
        <QuantityController product={detail} />
      </td>
      <td className="p-4">Rs. {detail.quantity * detail.price}</td>
      <td className="pr-2">
        {/* <Button className="bg-white" onClick={() => removeFromCart(detail?.id)}> */}
        <button
          className="w-[20px] h-[20px] text-red-500"
          onClick={() => removeFromCart(detail?.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        {/* </Button> */}
      </td>
    </tr>
  );
};

export default CartItem;
