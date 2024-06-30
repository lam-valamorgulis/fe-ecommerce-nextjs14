import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
};
export default function ThankYouPage() {
  return (
    <main className="text-center space-y-6 mt-4 pt-10">
      <h1 className="text-3xl font-semibold">Thank you for your purchase</h1>
      <Link href="/" className="underline text-xl text-accent-500 inline-block">
        Continue shopping
      </Link>
    </main>
  );
}
