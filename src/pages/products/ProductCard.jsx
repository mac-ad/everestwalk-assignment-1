import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { twMerge } from "tailwind-merge";

const ProductCard = ({ item }) => {
  return (
    <div className="product-card relative flex flex-col gap-2 w-full border-gray-200 border-[1px] rounded-md overflow-hidden bg-gray-100">
      <div className="image h-[200px] object-cover w-full overflow-hidden">
        <img
          src={item?.thumbnail}
          alt=""
          className=" h-full w-full object-cover z-[-1]"
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
        <button
          className={twMerge(
            "mt-auto bg-[rgba(0,0,0,1)] transition-all  w-full p-2 rounded-md text-white flex justify-center items-center gap-4 text-sm hover:bg-[rgba(255,255,255,1)] border-2 hover:border-black hover:text-black",
            item.stock === 0 &&
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
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
