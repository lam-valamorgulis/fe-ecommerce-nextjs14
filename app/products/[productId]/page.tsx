import ProductList from "@/app/_components/ProductList";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<h1>loading....</h1>}>
      <ProductList />
    </Suspense>
  );
}
