import CartItem from "./CartItem";

const CartItemsContainer = ({ items }) => {
  return (
    <div className=" overflow-x-auto">
      <table
        className=""
        // className="flex flex-col  overflow-y-auto gap-2 mt-5 md:max-h-[unset] md:overflow-auto"
      >
        <thead className="">
          <tr className="">
            <td></td>
            <td className="">Product</td>
            <td className="">Price</td>
            <td className="">Quantity</td>
            <td className="">Subtotal</td>
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
