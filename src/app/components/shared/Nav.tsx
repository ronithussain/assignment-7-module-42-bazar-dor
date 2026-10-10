"use client";
import Link from "next/link";
import { INav } from "./Navlinks";
import { usePathname } from "next/navigation";
interface Inav {
  nav: INav;
}

const Nav = ({ nav }: Inav) => {
  const pathname = usePathname();
  const href = `/category/${nav.id}`;
  const isActive = pathname === href;
  //   console.log(nav, "this is nav");
  return (
    <div>
      <Link
        href={href}
        className={`flex gap-1 items-center px-2 py-1 rounded-md transition-colors ${
          isActive
            ? "text-red-600 font-semibold border-b-2 border-red-600"
            : "text-gray-700 hover:text-red-500"
        }`}
      >
        <span>{nav.icon}</span>
        <h2 className="text-xs md:text-lg">{nav.nameBn}</h2>
      </Link>
    </div>
  );
};

export default Nav;
