import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import Marquee from "./components/shared/Marquee";
export interface Product {
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
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

export default async function Home() {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    { next: { revalidate: 60 } },
  );
  const data: Product[] = await res.json();

  const upProduct = data.filter((up) => up.change.dir === "up");
  const highestProduct = [...upProduct].sort(
    (a, b) => b.change.pct - a.change.pct,
  );
  console.log(highestProduct);

  const downProduct = data.filter((down) => down.change.dir === "down");
  const lowestProduct = [...downProduct].sort(
    (a, b) => a.change.pct - b.change.pct,
  );
  console.log(lowestProduct);

  // console.log(data, 'all products')

  return (
    <div>
      <Marquee />
      <Banner />
      <div className="container mx-auto px-4 mt-4 mb-8">
        <div>
          <h2 className="text-xl md:text-2xl text-gray-800 font-bold mb-2">
            আজ দাম বেড়েছে
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-">
            {highestProduct.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="mt-4 md:mt-6">
          <h2 className="text-xl md:text-2xl text-gray-800 font-bold  mb-2">
            আজ দাম কমেছে
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {lowestProduct.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        {/* all Products */}
        <div className="mt-4 md:mt-6">
          <h2 className="text-xl md:text-2xl text-gray-800 font-bold  mb-2">
            সব পণ্য
          </h2>
          <span className="text-gray-700">
            মোট {data?.length} টি পণ্য দেখানো হচ্ছে{" "}
          </span>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {data?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
