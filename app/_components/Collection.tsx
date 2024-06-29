import Image from "next/image";
import React from "react";

const collections = [
  {
    name: "Handcrafted Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
  },
  {
    name: "Organized Desk Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
  },
  {
    name: "Focus Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description:
      "Be more productive than enterprise project managers with a single piece of paper.",
  },
];

function Collection() {
  return (
    <section
      aria-labelledby="collection-heading"
      className="mx-auto max-w-xl px-4 pt-16 sm:px-6 sm:pt-24 lg:max-w-7xl lg:px-8"
    >
      <h2
        id="collection-heading"
        className="text-2xl font-bold tracking-tight text-gray-900"
      >
        Shop by Collection
      </h2>
      <p className="mt-4 text-base text-gray-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        veritatis omnis nulla unde ullam, deleniti adipisci, aspernatur, te
      </p>

      <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 gap-y-4">
        {collections.map((collection) => (
          <a
            key={collection.name}
            href={collection.href}
            className="group block"
          >
            <div
              aria-hidden="true"
              className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
            >
              <Image
                src={collection.imageSrc}
                alt={collection.imageAlt}
                fill
                className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-900">
              {collection.name}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              {collection.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Collection;
