import Link from "next/link";
import Nav from "./Nav";
export interface INav {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const Navlinks = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");
  const navLinks: INav[] = await res.json();
  // console.log(navLinks);
  return (
   <div className="border-t-1 border-gray-300">
     <div className="container  mx-auto px-1 md:px-0 flex flex-wrap justify-start md:justify-center items-center gap-6 pb-2">
      <Link href={"/"} className="text-xs md:text-lg">
          🏠 হোম
      </Link>

      {navLinks.map((nav) => (
        <Nav key={nav.id} nav={nav} />
      ))}
    </div>
   </div>
  );
};

export default Navlinks;
