import { Button } from "@mui/material";
import { HeartIcon } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "../../store/cart";

const AddToCart = ({ disabled, detail }) => {
  const [count, setCount] = useState(1);

  console.log(disabled);

  const addToCart = useCartStore((state) => state.addToCart);

  const addToCartHandler = () => {
    if (count > detail.stock) return;

    addToCart(detail, count);
  };

  return (
    <div className="flex gap-2">
      <div className="flex gap-2 items-center border border-black w-fit px-4 py-1 rounded-md">
        <button className="text-xl" onClick={() => setCount(count - 1)}>
          -
        </button>
        {count}
        <button className="text-xl" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
      <Button
        style={{
          backgroundColor: "black",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,.6)",
          },
          width: "100%",
        }}
        disabled={disabled}
        onClick={addToCartHandler}
      >
        Add to Cart
      </Button>
      <Button
        style={{
          backgroundColor: "white",
          color: "black",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,.6)",
          },
          border: "1px solid black",
          width: "50px",
        }}
      >
        <HeartIcon />
      </Button>
    </div>
  );
};

export default AddToCart;
