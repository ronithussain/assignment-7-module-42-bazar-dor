import Link from "next/link";
import Nav from "./Nav";
export interface INav {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const Navlinks = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );
  const navLinks: INav[] = await res.json();
  // console.log(navLinks);
  return (
    <div className="container mx-auto px-4 flex flex-wrap justify-start md:justify-center items-center gap-6 pb-3">
      <Link href={"/"} className="text-xs md:text-lg">
          🏠 হোম
      </Link>

      {navLinks.map((nav) => (
        <Nav key={nav.id} nav={nav} />
      ))}
    </div>
  );
};

export default Navlinks;
