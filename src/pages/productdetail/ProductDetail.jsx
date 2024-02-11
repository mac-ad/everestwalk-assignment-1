import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { urls } from "../../statics";
import Wrapper from "../../components/HOC/Wrapper";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

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
        <img src={product?.thumbnail} alt="" />
        <h1 className="text-2xl">{product?.title}</h1>
        <div className="flex items-center gap-2">
          {product?.images?.map((img) => (
            <div className=" border border-gray-500">
              <img src={img} className="" />
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetail;
