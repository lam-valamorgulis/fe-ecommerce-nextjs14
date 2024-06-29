import ProductItem from "@/app/_components/ProductItem";
import { getProduct, getProductList } from "@/app/_lib/api";

export async function generateMetadata({ params }) {
  const { title } = await getProduct(params.productId);
  return { title: `Product ${title}` };
}

export async function generateStaticParams() {
  const products = await getProductList();

  const ids = products.products.map((product) => ({
    productId: String(product.id),
  }));
  console.log(ids);
  return ids;
}

export default async function PageProduct({ params }) {
  const product = await getProduct(params.productId);

  return <ProductItem data={product} />;
}
