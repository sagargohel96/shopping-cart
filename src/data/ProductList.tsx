import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Card } from "../components/Card";

import { ProductInterface } from "../interface/ProductInferface";

const ProductList = () => {
  const [products, setProducts] = useState<ProductInterface[]>();
  const productCategories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ];

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  const productcategory = useCallback(
    (category: string) => {
      return !!products?.length
        ? products.filter((product) => product.category === category)
        : [];
    },
    [products]
  );

  const categoryWise = productCategories.map((category) => {
    return productcategory(category);
  });
  console.log(categoryWise);

  return (
    <div className="">
      {categoryWise &&
        categoryWise.map((product) => {
          return (
            <>
              <div
                className="bg-indigo-900 text-center py-4 lg:px-4"
                role="alert"
              >
                <span className=" rounded-full bg-indigo-500 uppercase px-4 py-3 text-lg font-bold text-white mr-3 ">
                  {product[0]?.category.toLocaleUpperCase()}
                </span>
              </div>
              <div className="grid  md:grid-cols-3  sm:grid-cols-1 p-20  gap-10">
                {product &&
                  product?.map((product) => {
                    return (
                      <>
                        <Card
                          key={product.id}
                          cardDetails={{
                            imgurl: `${product.images[0]} `,
                            title: `${product.title}`,
                            rating: product.rating,
                            price: product.price,
                          }}
                        />
                      </>
                    );
                  })}
              </div>
            </>
          );
        })}

      {/* {products &&
        products.map((product) => {
          return (
            <Card
              key={product.id}
              cardDetails={{
                imgurl: `${product.images[0]} `,
                title: `${product.title}`,
                rating: product.rating,
                price: product.price,
              }}
            />
          );
        })} */}
    </div>
  );
};

export default ProductList;
