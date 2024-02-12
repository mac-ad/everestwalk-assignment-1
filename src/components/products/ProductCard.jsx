import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { twMerge } from "tailwind-merge";
import { useCartStore } from "../../store/cart";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const navigate = useNavigate();

  const addToCartHandler = (e) => {
    e.stopPropagation();
    toast("item added to cart");
    addToCart(item);
  };

  return (
    <div
      onClick={() => {
        navigate(`/product/${item.id}`);
      }}
      className=" bg-white cursor-pointer hover:shadow-2xl  transition-all product-card relative flex flex-col gap-2 w-full border-gray-200 border-[1px] rounded-md  "
    >
      <div className="image h-[150px] object-cover w-full overflow-hidden">
        <img
          src={item?.thumbnail}
          alt=""
          className=" h-full w-full object-cover z-[-1] "
        />
      </div>

      {/* product info */}
      <div className="p-2 grow flex flex-col gap-3">
        <div className="flex justify-between items-start ">
          <div>
            <div className="font-semibold">{item?.title}</div>
            <small className="z-999 bottom-2 left-2 opacity-50 rounded-md">
              {item?.category}
            </small>
          </div>
          <p className="font-semibold">Rs.{item?.price}</p>
        </div>
        <div className="mt-auto">
          <Button
            onClick={addToCartHandler}
            className={twMerge(
              item.stock < 0 &&
                "cursor-not-allowed opacity-50 hover:text-unset hover:bg-unset hover:border-unset"
            )}
          >
            {item?.stock != 0 ? (
              <>
                <span>Add To Cart</span>
                <FontAwesomeIcon icon={faCartShopping} />
              </>
            ) : (
              <span>Out of Stock</span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
