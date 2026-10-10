import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headline {
  id: string;
  nameBn: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
}
const Marquee = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data = await res.json();
  const headlines: Headline[] = data;

  // console.log(headlines);
  return (
    <div className=" text-gray-700 border border-gray-200 px-4 py-0.5">
      <div className="container mx-auto">
        <MarqueeText className="py-1" direction="right" duration={10}>
          {headlines.map((p) => (
            <Link href={`/products-details/${p.id}`} key={p.id}>
              <span> {p.nameBn}</span>
              <span className="mx-2">{p.today} টাকা/কেজি</span>
              <span
                className={
                  p.change.dir === "up" ? "text-green-600" : "text-red-600"
                }
              >
                {p.change.dir === "up" ? "▲" : "▼"}{p.change.pct}%
              </span>
              <span className=" mx-5">•</span>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
