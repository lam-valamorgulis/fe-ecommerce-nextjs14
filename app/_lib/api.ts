import { notFound } from "next/navigation";

export async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  return data;
}

export async function getProductList() {
  try {
    const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(`Error fetching product list: ${error.message}`);
    } else {
      console.error("An unexpected error occurred");
      throw new Error("An unexpected error occurred");
    }
  }
}
