import { Link } from "@heroui/react";
import Image from "next/image";
import Navlinks from "./Navlinks";
import UserInfo from "./UserInfo";
import { Suspense } from "react";
import Marquee from "./Marquee";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-icon.png"
              alt="বাজার দর লোগো"
              height={50}
              width={50}
            />

            <h2 className="text-xl sm:text-2xl text-gray-800 font-bold">
              বাজার দর
            </h2>
          </div>
        </Link>

        <UserInfo />
      </header>
      <Suspense
        fallback={
          <div className="flex justify-center gap-6 py-2 animate-pulse">
            <div className="h-4 w-16 bg-gray-200 rounded" />
            <div className="h-4 w-16 bg-gray-200 rounded" />
            <div className="h-4 w-16 bg-gray-200 rounded" />
          </div>
        }
      >
        <Navlinks />
        <Marquee />
      </Suspense>
    </nav>
  );
}
