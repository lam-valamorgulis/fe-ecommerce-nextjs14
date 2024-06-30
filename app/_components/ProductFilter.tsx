"use client";

import { useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "All New Arrivals" },
      { value: "tees", label: "Tees" },
      { value: "crewnecks", label: "Crewnecks" },
      { value: "sweatshirts", label: "Sweatshirts" },
      { value: "pants-shorts", label: "Pants & Shorts" },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "2xl", label: "2XL" },
    ],
  },
];

function ProductFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const step = 2;
  const maxPrice = 100;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handlePriceChange = (e) => {
    const price = e.target.value;
    setSelectedPrice(price);
    updateUrlWithPrice(price);
  };

  const updateUrlWithPrice = (price) => {
    const params = new URLSearchParams(searchParams);
    params.set("price", String(selectedPrice));
    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const price = urlParams.get("price") || maxPrice;
    setSelectedPrice(price);
  }, []);

  return (
    <aside>
      <h2 className="sr-only">Filters</h2>

      <button
        type="button"
        className="inline-flex items-center lg:hidden"
        onClick={() => setMobileFiltersOpen(true)}
      >
        <span className="text-sm font-medium text-gray-700">Filters</span>
        <PlusIcon
          className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
          aria-hidden="true"
        />
      </button>

      <div className="hidden lg:block">
        <form className="space-y-10 divide-y divide-gray-200">
          {filters.map((section, sectionIdx) => (
            <div key={section.name} className={sectionIdx === 0 ? "" : "pt-10"}>
              <fieldset>
                <legend className="block text-sm font-medium text-gray-900">
                  {section.name}
                </legend>
                <div className="space-y-3 pt-6">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`${section.id}-${optionIdx}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          ))}
          <div className="pt-10">
            <fieldset>
              <legend className="block text-sm font-medium text-gray-900">
                Price
              </legend>
              <div className="space-y-3 pt-6">
                <div className="flex items-center">
                  <input
                    type="range"
                    name="price"
                    min={0}
                    max={maxPrice}
                    step={step}
                    value={selectedPrice}
                    onChange={handlePriceChange}
                    className="w-full"
                  />
                  <span className="ml-3 text-sm text-gray-600">
                    ${selectedPrice}
                  </span>
                </div>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    </aside>
  );
}

export default ProductFilter;
