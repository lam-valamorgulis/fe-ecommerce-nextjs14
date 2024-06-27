import React from "react";
import Image from "next/image";
import Link from "next/link";
export async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function ProductList() {
  const products = await getData();
  return (
    <>
      {products.products.map((product) => (
        <div key={product.id} className="group">
          <div className="relative h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
            <Image
              src={product.thumbnail}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 h-full w-full object-contain "
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          <p className="mt-1 text-sm font-medium text-gray-900">
            {product.price}
          </p>
        </div>
      ))}
    </>
  );
}

export default ProductList;
