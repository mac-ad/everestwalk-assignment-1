import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { urls } from "../../statics";
import Wrapper from "../../components/HOC/Wrapper";
import Button from "../../components/button/Button";
import { ShoppingCart, ShoppingCartIcon, Star, StarIcon } from "lucide-react";
import { useCartStore } from "../../store/cart";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`${urls.singleProduct}/${id}`);
      const productResponse = await res.json();
      setProduct(productResponse);
    };

    fetchProduct();
  }, []);

  return (
    <div>
      <Wrapper>
        <div className="grid grid-cols-[1fr,2fr] mt-10 gap-10">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-full rounded-sm overflow-hidden shadow-lg">
              <img src={product?.thumbnail} alt="" />
            </div>
            {product?.images?.map((img) => (
              <div className="col-auto rounded-sm overflow-hidden shadow-lg">
                <img src={img} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <div className="details -mt-1 flex flex-col gap-2 max-w-[500px]">
            <h1 className="text-2xl">{product?.title}</h1>
            <p>{product?.description}</p>

            <div className="flex gap-1 items-center bg-white w-fit px-3 py-1 rounded-sm text-yellow-500 font-bold">
              <StarIcon />
              {product?.rating}
            </div>

            <Button
              className="w-fit mt-10 px-5 py-3"
              disabled={product?.stock === 0}
            >
              <div
                className="flex gap-2 items-center justify-center"
                onClick={() => addToCart(product)}
              >
                <ShoppingCart />
                Add to Cart
              </div>
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetail;
