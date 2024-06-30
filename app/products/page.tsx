import ProductFilter from "../_components/ProductFilter";
import ProductList from "../_components/ProductList";
import ProductsHeader from "../_components/ProductsHeader";

export const metadata = {
  title: "Products",
};

export default function ProductsPage({ searchParams }) {
  const filter = searchParams?.price ?? 100;

  return (
    <>
      <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
        <ProductsHeader />
        <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <ProductFilter />
          <ProductList filter={filter} />
        </div>
      </main>
    </>
  );
}
