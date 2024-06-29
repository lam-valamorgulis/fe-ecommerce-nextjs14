import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <Spinner />
        <p className="text-xl text-primary-200 mt-4">Loading product...</p>
      </div>
    </div>
  );
}
