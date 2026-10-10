import Link from "next/link";
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
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products-details/${product.id}`}>
      <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
        {/* Top: icon + name + unit */}
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 rounded-xl p-2 shrink-0">
            <span className="object-contain text-4xl">{product?.image}</span>
          </div>

          <div className="min-w-0">
            <h3 className="text-lg font-bold text-gray-900 truncate">
              {product.nameBn}
            </h3>
            <p className="text-sm text-gray-500">
              প্রতি {product?.unit || "কেজি"}
            </p>
          </div>
        </div>

        {/* Bottom: price label + price + change badge */}
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-1">আজকের দাম</p>

          <div className="flex items-center justify-between">
            <p className={`text-2xl font-bold`}>৳ {product?.today}</p>
            <p
              className={`text-sm font-medium ${product.change.dir === "up" ? "text-red-500" : "text-green-500"}`}
            >
              {product.change.dir === "up" ? "▲" : "▼"} {product.change.pct}%
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
