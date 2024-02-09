import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartStore } from "../../store/cart";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const QuantityController = ({ product }) => {
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);

  const addToCart = useCartStore((state) => state.addToCart);

  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const decrementHandler = () => {
    if (product.quantity !== 1) {
      decrementQuantity(product);
      return;
    }
    removeFromCart(product.id);
  };

  const incrementHandler = () => {
    addToCart(product);

    // incrementQuantity(product.id)
  };

  return (
    <div className="border rounded-md border-black py-1 px-2">
      <div className="flex gap-4 items-center justify-center">
        <Button onClick={decrementHandler}>
          <FontAwesomeIcon icon={faMinus} className="text-sm" />
        </Button>
        <span>{product.quantity}</span>
        <Button onClick={incrementHandler}>
          <FontAwesomeIcon icon={faPlus} className="text-sm" />
        </Button>
      </div>
    </div>
  );
};

const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default QuantityController;
