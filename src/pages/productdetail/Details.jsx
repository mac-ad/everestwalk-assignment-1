import { Rating } from "@mui/material";
import AddToCart from "../../components/addToCart/AddToCart";

const Details = ({ detail }) => {
  return (
    <div className="flex flex-col gap-4 max-w-[600px]">
      <div className="flex items-start justify-between">
        <h1 className="text-2xl font-bold">{detail?.title}</h1>
        {detail?.stock === 0 && <div className="bg-red-300">Out of stock</div>}
        {detail?.stock > 0 && (
          <div className="green-tag bg-green-300 whitespace-nowrap px-2 py-1 rounded-sm text-sm text-green-700">
            In stock
          </div>
        )}
      </div>
      <p className=" w-[80%] max-w-[50ch]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aspernatur?
      </p>
      <div className="flex gap-4 items-center">
        <Rating value={detail.rating} step={1} readOnly />
        <div className="opacity-50">{detail?.rating} (121 reviews)</div>
      </div>
      <div className="flex gap-2 items-center text-xl">
        <h3 className="font-semibold">Rs.{detail?.price}</h3>
        <h3 className="line-through opacity-50">
          Rs.
          {detail?.price +
            Math.floor(detail?.price / detail?.discountPercentage)}
        </h3>
      </div>
      <p className="max-w-[50ch]">
        {detail?.description}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos?
      </p>

      {/* add to cart */}
      <div className="mt-5">
        <AddToCart disabled={detail?.stock === 0} detail={detail} />
      </div>
    </div>
  );
};

export default Details;
