import CartItem from "./CartItem";

const CartItemsContainer = ({ items }) => {
  return (
    <table
      className="border"
      // className="flex flex-col  overflow-y-auto gap-2 mt-5 md:max-h-[unset] md:overflow-auto"
    >
      <thead>
        <tr className="">
          <td className="p-4">Product</td>
          <td className="p-4">Price</td>
          <td className="p-4">Quantity</td>
          <td className="p-4">Subtotal</td>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <CartItem key={item.id} detail={item} />
        ))}
      </tbody>
    </table>
  );
};

export default CartItemsContainer;
