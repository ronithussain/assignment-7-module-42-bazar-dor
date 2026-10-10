export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Skeleton */}
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-center items-center gap-6 border-b border-gray-200">
        {/* Home link */}
        <div className="h-4 w-14 rounded bg-gray-200 animate-pulse" />

        {/* Nav items */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-gray-200 animate-pulse" />
            <div
              className="h-4 w-16 rounded bg-gray-200 animate-pulse"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          </div>
        ))}
      </div>

      {/* Hero / Banner Skeleton */}
      <div className="container mx-auto px-4 py-8">
        <div className="w-full h-40 md:h-56 rounded-2xl bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      </div>

      {/* Section title */}
      <div className="container mx-auto px-4 mb-6">
        <div className="h-6 w-40 rounded bg-gray-200 animate-pulse" />
      </div>

      {/* Product Grid Skeleton */}
      <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-12">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
          >
            {/* Image placeholder */}
            <div className="aspect-square bg-gray-200 animate-pulse" />

            {/* Content */}
            <div className="p-3 space-y-2">
              <div className="h-3 w-3/4 rounded bg-gray-200 animate-pulse" />
              <div className="h-3 w-1/2 rounded bg-gray-200 animate-pulse" />
              <div className="h-4 w-1/3 rounded bg-gray-300 animate-pulse mt-2" />
            </div>
          </div>
        ))}
      </div>

      {/* Loading dots (optional flair) */}
      <div className="flex justify-center gap-2 pb-10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-bounce" />
        <span className="w-2.5 h-2.5 rounded-full bg-pink-400 animate-bounce [animation-delay:150ms]" />
        <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
}
