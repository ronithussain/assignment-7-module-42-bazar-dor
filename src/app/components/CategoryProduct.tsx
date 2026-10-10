"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";

interface IProduct {
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
    dir: "up" | "down";
    pct: number;
  };
}

const CategoryProduct = ({ products }: { products: IProduct[] }) => {
  const [sorts, setSorts] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sorts === "low-to-high") {
      return a.today - b.today;
    } else if (sorts === "high-to-low") {
      return b.today - a.today;
    } else {
      return 0;
    }
  });

  return (
    <div>
      <div className="bg-white border border-gray-300 rounded-2xl p-4 flex justify-end items-center gap-3 shadow-sm">
        <span className="text-sm text-gray-500">সাজান</span>
        <select
          value={sorts}
          onChange={(e) => setSorts(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm bg-white outline-none"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low-to-high">দাম: কম থেকে বেশি</option>
          <option value="high-to-low">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      {/* Product Grid */}
      <p className="text-md md:text-lg text-gray-800 mt-3">
        মোট {sortedProducts.length}টি পণ্য দেখানো হচ্ছে
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
