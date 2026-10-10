import CategoryProduct from "@/app/components/CategoryProduct";
import { notFound } from "next/navigation";

interface ICategory {
  id: number;
  slug: string;
  nameBn: string;
  icon: string;
}

// ২. প্রোডাক্ট অবজেক্টের টাইপ
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

const CategoryProductPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  console.log(categoryId);

  const navRes = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/categories`,
 
  );
  const categories: ICategory[] = await navRes.json();
  const currentCategories = categories.find((c) => c.slug === categoryId);
  //   console.log(currentCategories, 'find categories')
  if (!currentCategories) {
    notFound();
  }

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products`,
   
  );
  const data: IProduct[] = await res.json();
  const products = data.filter((p) => p.category === categoryId);

  if (!products) {
    notFound();
  }
  //   console.log(products, 'final data')

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Header Card */}
      <div className="bg-white border border-gray-300 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-3xl">
          {currentCategories?.icon}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {currentCategories?.nameBn}
          </h1>
          <p className="text-sm text-gray-500">
            {products?.length} পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <p className="text-md md:text-lg text-gray-800 mt-3">
        মোট {products?.length}টি পণ্য দেখানো হচ্ছে
      </p>
      <CategoryProduct products={products} />
    </div>
  );
};

export default CategoryProductPage;
