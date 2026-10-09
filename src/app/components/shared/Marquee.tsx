import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headline {
  id: string;
  nameBn: string;
}
const Marquee = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data = await res.json();
  const headlines: Headline[] = data;

  // console.log(headlines);
  return (
    <div className=" text-gray-700 border-t-1 border-gray-200 px-4">
      <div className="flex items-center container mx-auto">
        <div className=" py-1.5 px-4 font-bold">সর্বশেষ</div>

        <MarqueeText className="py-1" direction="right" duration={10}>
          {headlines.map((p) => (
            <Link href={`${p.id}`} key={p.id}>
              <span> {p.nameBn}</span>
              <span className=" mx-5">•</span>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
