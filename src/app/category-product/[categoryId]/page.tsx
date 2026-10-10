import ProductCard from "@/app/components/ProductCard";

const CategoryProductPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  console.log(categoryId);

  const navRes = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/categories`,
    { next: { revalidate: 60 } },
  );
  const categories = await navRes.json();
  const currentCategories = categories.find((c) => c.slug === categoryId)
  console.log(currentCategories, 'find categories')
  
  
  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products`,
    { next: { revalidate: 60 } },
  );
  const data = await res.json();
  const products = data.filter((p) => p.category === categoryId);

  console.log(products, 'final data')

//   console.log(products, "or", products.length);
  return (
     <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Header Card */}
      <div className="bg-white border border-gray-300 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-3xl">
          {currentCategories?.icon}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{currentCategories?.nameBn}</h1>
          <p className="text-sm text-gray-500">
            {products?.length} পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-gray-300 rounded-2xl p-4 flex justify-end items-center gap-3 shadow-sm">
        <span className="text-sm text-gray-500">সাজান</span>
        <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm bg-white">
          <option>হ্রাসবৃদ্ধি</option>
          <option>দাম ↑</option>
          <option>দাম ↓</option>
        </select>
      </div>

      {/* Product Grid */}
      <p className="text-md md:text-lg text-gray-800 mt-3">মোট {products?.length}টি পণ্য দেখানো হচ্ছে</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProductPage;
