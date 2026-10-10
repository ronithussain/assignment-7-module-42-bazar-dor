import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-6">
      <div className="text-center max-w-lg">
        {/* Glowing 404 */}
        <div className="relative mb-6">
          <h1 className="text-[8rem] md:text-[10rem] font-black leading-none bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent select-none">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 -z-10" />
        </div>

        {/* Icon */}
        <div className="text-6xl mb-4 animate-bounce">🛒</div>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          পেজটি খুঁজে পাওয়া যায়নি
        </h2>
        <p className="text-gray-500 mb-8 text-sm md:text-base leading-relaxed">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি মুছে ফেলা হয়েছে, নাম পরিবর্তন করা
          হয়েছে অথবা কখনোই ছিল না।
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105 transition-all duration-300"
          >
            🏠 হোমে ফিরে যান
          </Link>

          <Link
            href="/category"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-red-500 hover:text-red-500 transition-all duration-300"
          >
            🧭 ক্যাটাগরি দেখুন
          </Link>
        </div>

        {/* Decorative dots */}
        <div className="mt-12 flex justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse [animation-delay:150ms]" />
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}
