import CartItem from "./CartItem";

const CartItemsContainer = ({ items }) => {
  return (
    <div className="bg-white p-5 rounded-[5px]">
      <table
        className=""
        // className="flex flex-col  overflow-y-auto gap-2 mt-5 md:max-h-[unset] md:overflow-auto"
      >
        <thead className="">
          <tr className="">
            <td></td>
            <td className="p-4">Product</td>
            <td className="p-4">Price</td>
            <td className="p-4">Quantity</td>
            <td className="p-4">Subtotal</td>
            <td></td>
          </tr>
        </thead>
        <tbody className="">
          {items?.map((item) => (
            <CartItem key={item.id} detail={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItemsContainer;
