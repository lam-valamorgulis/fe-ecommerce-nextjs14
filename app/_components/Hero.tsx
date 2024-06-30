import Image from "next/image";
import bg from "@/public/bg.png";
import Link from "next/link";
export default function Hero() {
  return (
    <section aria-labelledby="comfort-heading" className="mx-auto max-w-full">
      <div className="relative rounded-sm">
        <div className="absolute inset-0">
          <Image src={bg} alt="" className="h-full w-full" />
        </div>
        <div className="relative bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
          <div className="relative  flex max-w-3xl flex-col ">
            <h2
              id="comfort-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Simple productivity
            </h2>
            <h3 className="mt-3 text-xl text-white">
              Lorem ipsum dolor, sit amet consect
            </h3>
            <div className="mt-6">
              <Link
                href="/products"
                className="btn-radiant text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                Shop Focus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
