"use server";

import { redirect } from "next/navigation";

export async function createOrder(cartData, formData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  redirect("/products/thankyou");
}
