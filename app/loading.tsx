import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <Spinner />
      </div>
    </div>
  );
}
