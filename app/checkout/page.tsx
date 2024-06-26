"use client";
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { createOrder } from "../_lib/actions";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import ConfirmButton from "../_components/ConfirmButton";
import { useCartStore } from "../a2c-provider";

const products = [
  {
    id: 1,
    name: "Micro Backpack",
    href: "#",
    price: "$70.00",
    color: "Moss",
    size: "5L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg",
    imageAlt:
      "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
  },
  // More products...
];

// export const metadata: Metadata = {
//   title: "Check Out",
// };
export default function CheckoutPage() {
  const cartData = {
    id: 1,
    name: "Micro Backpack",
    href: "#",
    price: "$70.00",
    color: "Moss",
    size: "5L",
  };
  const cart = useCartStore((state) => state.cart);
  console.log(cart);

  const createOrderWithFormData = createOrder.bind(null, cartData);

  return (
    <div>
      <div className="bg-white">
        {/* Background color split screen for large screens */}
        <div
          className="fixed left-0 top-0 hidden h-full w-1/2 bg-white lg:block"
          aria-hidden="true"
        />
        <div
          className="fixed right-0 top-0 hidden h-full w-1/2 bg-gray-50 lg:block"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48">
          <h1 className="sr-only">Order information</h1>

          <section
            aria-labelledby="summary-heading"
            className="bg-gray-50 px-4 pb-10 pt-16 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16"
          >
            <div className="mx-auto max-w-lg lg:max-w-none">
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Order summary
              </h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 text-sm font-medium text-gray-900"
              >
                {cart.map((product) => (
                  <li
                    key={product.id}
                    className="relative flex items-start space-x-4 py-6"
                  >
                    <Image
                      width={80}
                      height={80}
                      src={product.images[0]}
                      alt={product.imageSrc}
                      className="flex-none rounded-md object-cover object-center"
                    />
                    <div className="flex-auto space-y-1">
                      <h3>{product.title}</h3>
                      <p className="text-gray-500">{product.color}</p>
                      <p className="text-gray-500">{product.quantity}</p>
                    </div>
                    <p className="flex-none text-base font-medium">
                      {product.price}
                    </p>
                  </li>
                ))}
              </ul>

              <dl className="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Subtotal</dt>
                  <dd>$320.00</dd>
                </div>

                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Shipping</dt>
                  <dd>$15.00</dd>
                </div>

                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Taxes</dt>
                  <dd>$26.80</dd>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base">Total</dt>
                  <dd className="text-base">$361.80</dd>
                </div>
              </dl>

              <Popover className="fixed inset-x-0 bottom-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
                <div className="relative z-10 border-t border-gray-200 bg-white px-4 sm:px-6">
                  <div className="mx-auto max-w-lg">
                    <PopoverButton className="flex w-full items-center py-6 font-medium">
                      <span className="mr-auto text-base">Total</span>
                      <span className="mr-2 text-base">$361.80</span>
                      <ChevronUpIcon
                        className="h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </PopoverButton>
                  </div>
                </div>

                <Transition>
                  <div>
                    <TransitionChild
                      enter="transition-opacity ease-linear duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity ease-linear duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <PopoverBackdrop className="fixed inset-0 bg-black bg-opacity-25" />
                    </TransitionChild>

                    <TransitionChild
                      enter="transition ease-in-out duration-300 transform"
                      enterFrom="translate-y-full"
                      enterTo="translate-y-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="translate-y-0"
                      leaveTo="translate-y-full"
                    >
                      <PopoverPanel className="relative bg-white px-4 py-6 sm:px-6">
                        <dl className="mx-auto max-w-lg space-y-6">
                          <div className="flex items-center justify-between">
                            <dt className="text-gray-600">Subtotal</dt>
                            <dd>$320.00</dd>
                          </div>

                          <div className="flex items-center justify-between">
                            <dt className="text-gray-600">Shipping</dt>
                            <dd>$15.00</dd>
                          </div>

                          <div className="flex items-center justify-between">
                            <dt className="text-gray-600">Taxes</dt>
                            <dd>$26.80</dd>
                          </div>
                        </dl>
                      </PopoverPanel>
                    </TransitionChild>
                  </div>
                </Transition>
              </Popover>
            </div>
          </section>

          <form
            action={async (formData) => {
              await createOrderWithFormData(formData);
              // clearCart();
            }}
            className="px-4 pb-36 pt-16 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16"
          >
            <div className="mx-auto max-w-lg lg:max-w-none">
              <section aria-labelledby="contact-info-heading">
                <h2
                  id="contact-info-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Contact information
                </h2>

                <div className="mt-6">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      autoComplete="phone"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </section>

              <section aria-labelledby="shipping-heading" className="mt-10">
                <h2
                  id="shipping-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Shipping address
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="address"
                        name="address"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="apartment"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Apartment, suite, etc.
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="apartment"
                        name="apartment"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="region"
                        name="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="postal-code"
                        name="postal-code"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <div className="mt-10 border-t border-gray-200 pt-6 sm:flex sm:items-center sm:justify-between">
                <ConfirmButton />
                <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left"></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
