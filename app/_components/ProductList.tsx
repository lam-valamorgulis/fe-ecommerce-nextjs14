import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductList } from "../_lib/api";

async function ProductList() {
  const products = await getProductList();
  return (
    <section
      aria-labelledby="product-heading"
      className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
    >
      <h2 id="product-heading" className="sr-only">
        Products
      </h2>

      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
        {products.products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <Image
                src={product.thumbnail}
                alt={product.title}
                layout="fill"
                className="absolute inset-0 h-full w-full object-contain "
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
              <Link href={`/products/${product.id}`} scroll={true}>
                {product.title}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            <p className="mt-1 text-sm font-medium text-gray-900">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
