// src/app/components/shared/HeroBanner.tsx
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
    // const date = new Date().toLocaleDateString('bn-BD', {dateStyle:'full'})
  return (
    <section className="w-full px-4 py-8">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8 p-6 sm:p-8 md:p-10">
            {/* Left: Content */}
            <div className="flex-1 w-full">
              {/* Date Badge */}
              <span className="inline-block bg-green-100 text-green-700 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-4 text-center md:text-start">
                {/* {date} */}
              </span>

              {/* Heading */}
              <h1 className=" text-center md:text-start text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
                আজকের বাজারের দাম এক নজরে
              </h1>

              {/* Description */}
              <p className=" text-center md:text-start text-sm sm:text-base text-gray-600 leading-relaxed mb-6 max-w-xl">
                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
                বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক
                জায়গায়।
              </p>

              {/* CTA Button */}
              <Link
                href="/prices"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base font-medium px-5 py-2.5 rounded-lg transition shadow-sm"
              >
                সব নগণ দেখুন
              </Link>
            </div>

            {/* Right: Illustration */}
            <div className="flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72">
              <Image
                src='/bazar-hero.png'
                alt="বাজারের ঝুড়ি"
                width={300}
                height={220}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}