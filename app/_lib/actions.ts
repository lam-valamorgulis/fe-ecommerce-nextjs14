"use server";

import { redirect } from "next/navigation";

export async function createOrder(cartData, formData) {
  await setTimeout(() => {}, 2000);
  redirect("/products/thankyou");
}
