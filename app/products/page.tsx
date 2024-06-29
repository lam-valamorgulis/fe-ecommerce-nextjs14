import ProductMain from "../_components/ProductMain";
import ProductsHeader from "../_components/ProductsHeader";

export const metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <>
      <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
        <ProductsHeader />
        <ProductMain />
      </main>
    </>
  );
}
