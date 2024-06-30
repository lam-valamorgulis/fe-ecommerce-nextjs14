import React from "react";
import { useFormStatus } from "react-dom";

function ConfirmButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`w-full rounded-md border ${
        pending
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "border-transparent bg-indigo-600 text-white hover:bg-indigo-700"
      } px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto`}
    >
      {pending ? "Submitting..." : "Confirm"}
    </button>
  );
}

export default ConfirmButton;
