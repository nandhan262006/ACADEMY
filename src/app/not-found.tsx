import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="text-center">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to our photography courses.
        </p>
        <Link
          href="/"
          className="inline-flex h-11 px-8 items-center justify-center rounded-xl bg-black text-white font-medium hover:bg-gray-800 hover:scale-[1.02] transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
