import React from "react";
import ProductListSideBar from "./ProductListSideBar";
import ProductList from "./ProductList";

function ProductMain() {
  return (
    <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
      <ProductListSideBar />
      <ProductList />
    </div>
  );
}

export default ProductMain;
