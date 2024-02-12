import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/button/Button";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCartStore } from "../../store/cart";
import QuantityController from "./QuantityController";
import { twMerge } from "tailwind-merge";

const CartItem = ({ detail }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalCost = useCartStore((state) => state.totalCost);
  const selectedItemsId = useCartStore((state) => state.selectedItemsId);
  const addSelectedId = useCartStore((state) => state.addSelectedId);
  const removeSelectedId = useCartStore((state) => state.removeSelectedId);

  const removeItemHandler = () => {
    if (selectedItemsId.includes(detail?.id)) {
      removeSelectedId(detail?.id);
    }
    removeFromCart(detail?.id);
  };

  const selectHandler = (e) => {
    const selected = e.target.checked;

    console.log(selected);

    if (selected) {
      console.log("adding to selected ids");
      addSelectedId(detail.id);
      return;
    }

    removeSelectedId(detail.id);

    console.log("removing from selected ids");
  };

  return (
    <tr
      className={twMerge(
        " rounded-md cursor-pointer hover:bg-gray-100",
        selectedItemsId.includes(detail.id) && "bg-gray-100"
      )}
    >
      <td className="px-3 py-2 sm:pl-4 pointer-events-none">
        <input
          type="checkbox"
          id={`${detail.id}`}
          onClick={selectHandler}
          checked={selectedItemsId.includes(detail.id)}
          className=""
        />
      </td>
      <td className="py-2 ">
        <label htmlFor={detail.id} className="flex gap-4 items-start py-4">
          <div className="h-[45px] w-[45px] overflow-hidden rounded-sm  pointer-events-none">
            <img
              className="w-full h-full object-cover"
              src={detail?.thumbnail}
              alt=""
            />
          </div>
          <div className="mt-[-3px]  pointer-events-none">
            <h4 className="text-sm opacity-100 font-semibold">
              {detail.title}
            </h4>
          </div>
        </label>
      </td>
      <td className="p-4 whitespace-nowrap">Rs. {detail.price}</td>
      <td className="p-4">
        <QuantityController product={detail} />
      </td>
      <td className="p-4 whitespace-nowrap">
        Rs. {detail.quantity * detail.price}
      </td>
      <td className="pr-4">
        {/* <Button className="bg-white" onClick={() => removeFromCart(detail?.id)}> */}
        <button
          className="w-[20px] h-[20px] text-red-500 1"
          onClick={removeItemHandler}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        {/* </Button> */}
      </td>
    </tr>
  );
};

export default CartItem;
