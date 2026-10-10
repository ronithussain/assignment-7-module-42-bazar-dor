import Link from "next/link";
import { notFound } from "next/navigation";
import { BiRightArrow } from "react-icons/bi";

interface Market {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface ProductData {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: string;
    pct: number;
  };
  markets: Market[];
}

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${productId}`,
  );
  const data: ProductData = await res.json();
  if (!data) {
    notFound();
  }
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800 font-sans pb-10">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/">হোম</Link>
          <span>
            <BiRightArrow />
          </span>
          <span>চাল</span>
          <span>
            <BiRightArrow />
          </span>

          <span className="text-gray-700">স্বর্ণমাছি চাল</span>
        </div>

        {/* Top Header Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-300 p-6 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left Side: Product Info */}
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-4xl shadow-sm border border-gray-300">
              {data.image}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                {data.nameBn}
              </h1>
              <p className="text-gray-500 text-sm mb-1">
                {data.categoryIcon} {data.categoryNameBn} • {data.unit}
              </p>
              <p className="text-gray-500 text-sm">
                বাংলাদেশের বিভিন্ন বাজার থেকে আজকের মানা সর্বশেষ
              </p>
            </div>
          </div>

          {/* Right Side: Price Card */}
          <div className="bg-gray-50 border border-gray-300 rounded-xl p-4 min-w-[200px] text-center">
            <p className="text-sm text-gray-500 mb-1">আজকের মানা</p>
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-4xl font-bold text-gray-900">
                {data.today}
              </span>
              <span className="text-gray-500 text-lg">৳/{data.unit}</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-red-500 text-sm font-medium">
              <span>▲</span>
              <span>{data.change.pct}%</span>
            </div>
          </div>
        </div>

        {/* Price Comparison Cards */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            মাসের মানা
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Yesterday */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300">
              <p className="text-sm text-gray-500 mb-2">গতকালের মানা</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-2xl font-bold text-gray-900">
                  {data.yesterday}
                </span>
                <span className="text-gray-500 text-sm">৳/{data.unit}</span>
              </div>
              <p className="text-xs text-gray-400">আজকের তুলনায় কমতির মানা</p>
            </div>

            {/* Last Week */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300">
              <p className="text-sm text-gray-500 mb-2">গত সপ্তাহের মানা</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-2xl font-bold text-gray-900">
                  {data.lastWeek}
                </span>
                <span className="text-gray-500 text-sm">৳/{data.unit}</span>
              </div>
              <p className="text-xs text-gray-400">আজকের তুলনায় কমতির মানা</p>
            </div>

            {/* Last Month */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300">
              <p className="text-sm text-gray-500 mb-2">গত মাসের মানা</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-2xl font-bold text-gray-900">
                  {data.lastMonth}
                </span>
                <span className="text-gray-500 text-sm">৳/{data.unit}</span>
              </div>
              <p className="text-xs text-gray-400">আজকের তুলনায় কমতির মানা</p>
            </div>
          </div>
        </div>

        {/* Market Prices Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-300 overflow-hidden">
          <div className="p-5 border-b border-gray-300">
            <h2 className="text-lg font-semibold text-gray-800">
              বাজারভিত্তিক আজকের মানা
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-sm">
                  <th className="py-3 px-5 font-medium">বাজার</th>
                  <th className="py-3 px-5 font-medium">বিভাগ</th>
                  <th className="py-3 px-5 font-medium">সর্বনিম্ন</th>
                  <th className="py-3 px-5 font-medium">সর্বোচ্চ</th>
                  <th className="py-3 px-5 font-medium">গড়</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.markets.map((item, index) => {
                  const average = ((item.min + item.max) / 2).toFixed(2);
                  return (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors text-sm"
                    >
                      <td className="py-3 px-5 text-gray-800">{item.market}</td>
                      <td className="py-3 px-5 text-gray-500">
                        {item.division}
                      </td>
                      <td className="py-3 px-5 text-gray-600">
                        {item.min} টাকা
                      </td>
                      <td className="py-3 px-5 text-gray-600">
                        {item.max} টাকা
                      </td>
                      <td className="py-3 px-5 font-medium text-gray-800">
                        {average} টাকা
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
