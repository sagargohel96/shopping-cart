import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";

import { ProductInterface } from "../interface/ProductInferface";

const ProductList = () => {
  const [products, setProducts] = useState<ProductInterface[]>();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);
  return (
    <div className="py-8 grid  md:grid-cols-2  sm:grid-cols-1   gap-10 mx-14 ">
      {products &&
        products.map((product) => {
          return (
            <Card
              cardDetails={{
                imgurl: `${product.images[0]} `,
                title: `${product.title}`,
                rating: product.rating,
                price: product.price,
              }}
            />
          );
        })}
    </div>
  );
};

export default ProductList;
