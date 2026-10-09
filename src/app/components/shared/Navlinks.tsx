import Link from "next/link";
interface INav {
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
  console.log(navLinks);
  return (
    <div className="container mx-auto px-4 flex flex-wrap justify-start md:justify-center items-center gap-6 pb-3">
      <Link href={"/"} className="text-xs md:text-lg">
        Home
      </Link>

      {navLinks.map((nav) => (
        <div key={nav.id}>
          <Link href={`/category/${nav.id}`}>
            <div className="flex gap-1 items-center">
              <span>{nav.icon}</span>
              <h2 className="text-xs md:text-lg">{nav.nameBn}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navlinks;
