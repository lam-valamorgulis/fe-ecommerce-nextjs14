import { getData } from "@/app/_components/ProductList";
import ProductItem from "@/app/_components/ProductItem";

export async function generateStaticParams() {
  const products = await getData();

  const ids = products.products.map((product) => ({
    productId: String(product.id),
  }));
  console.log(ids);
  return ids;
}
export async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
}

export default async function PageProduct({ params }) {
  console.log(params);
  const product = await getProduct(params.productId);

  return <ProductItem data={product} />;
}
