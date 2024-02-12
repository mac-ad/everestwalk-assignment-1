import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { urls } from "../../statics";
import Wrapper from "../../components/HOC/Wrapper";
import WrapperSmall from "../../components/HOC/WrapperSmall";
import ProductsGrid from "../../components/products/ProductsGrid";

import Button from "../../components/button/Button";
import { ShoppingCart, ShoppingCartIcon, Star, StarIcon } from "lucide-react";
import { useCartStore } from "../../store/cart";
import Images from "./Images";
import Details from "./Details";
import DetailTabs from "./DetailTabs";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  // this all product is just used as a mock data for related procductrs section
  const [allProducts, setAllProducts] = useState([]);

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

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`${urls.products}`);
      const productResponse = await res.json();
      setAllProducts(productResponse.products);
    };

    fetchProduct();
  }, []);

  return (
    <div>
      <Wrapper>
        <div className="flex flex-col mb-10 gap-20 mt-10 ">
          {/* images */}
          <div className="flex flex-col gap-20 md:flex-row  md:gap-10 md:justify-start">
            <div className="max-w-[450px] mx-auto w-full md:mx-0">
              <Images thumbnail={product?.thumbnail} images={product?.images} />
            </div>
            {product && <Details detail={product} />}
          </div>
          <div className="col-span-full">
            <DetailTabs detail={product} />
          </div>
          <div className="grid grid-cols-1 mb-10">
            <h2 className="text-2xl mb-10">Related Products</h2>
            {allProducts.length > 0 && (
              <ProductsGrid products={allProducts.slice(0, 4)} filter={false} />
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetail;
