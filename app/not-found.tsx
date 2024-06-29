import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4 pt-10">
      <h1 className="text-3xl font-medium pb-5">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        type="button"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
