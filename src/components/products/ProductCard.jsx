import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { twMerge } from "tailwind-merge";
import { useCartStore } from "../../store/cart";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, Star, StarIcon } from "lucide-react";

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
      className=" group relative cursor-pointer transition-all product-card flex flex-col gap-2"
    >
      <div className="bg-gray-100 relative min-h-[250px] flex justify-center items-center rounded-sm group-hover:bg-gray-200 transition-all">
        <img
          src={item?.thumbnail}
          className="h-[100px] w-[100px] object-cover"
          alt=""
        />
        <div className="absolute z-10  h-full w-full opacity-100 flex flex-col md:opacity-0 md:group-hover:opacity-100">
          <div className="flex flex-col gap-2 px-2 py-4 items-end">
            <button className="bg-white h-[35px] w-[35px] text-sm p-2 rounded-full flex items-center justify-center">
              <StarIcon />
            </button>
            <button className="bg-white h-[35px] w-[35px] text-sm p-2 rounded-full flex items-center justify-center">
              <Eye />
            </button>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(item);
            }}
            className="bg-white w-[90%] mx-auto mt-auto mb-3 py-2 rounded-md"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-bold">{item?.brand}</h2>
          <h2 className="font-normal">{item?.title}</h2>
          <div className="flex gap-2 items-center">
            <h3>Rs.{item?.price}</h3>
            <h3 className="line-through opacity-50">
              Rs.
              {item?.price + Math.floor(item?.price / item?.discountPercentage)}
            </h3>
          </div>
        </div>
        {/* <div className="md:hidden flex flex-col gap-2">
          <div className="flex gap-2 justify-end">
            <button className="bg-black text-white h-[35px] w-[35px] text-sm p-2 rounded-full flex items-center justify-center">
              <StarIcon />
            </button>
            <button className="bg-black text-white h-[35px] w-[35px] text-sm p-2 rounded-full flex items-center justify-center">
              <Eye />
            </button>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(item);
            }}
            className="bg-black text-white mx-auto mt-auto mb-3 py-2 px-4 rounded-md"
          >
            Add to cart
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;
