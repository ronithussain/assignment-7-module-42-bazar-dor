"use client";
import { useState } from "react";
import { toast } from "sonner";

import { signOut, useSession } from "@/lib/auth-client";
import { ArrowDown } from "@gravity-ui/icons";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";

const UserInfo = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { data: session, isPending } = useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    await signOut();
    toast.success("আপনি সফলভাবে লগআউট করেছেন।");
  };
  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const authLinks = (
    <>
      {user?.name ? (
        <div className="relative flex items-center gap-2">
          {/* Profile Picture */}{" "}
          <Image
            src={user?.image || "/default-avatar.png"}
            height={40}
            width={40}
            alt="profile"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-green-600"
          />
          <h2>{user.name}</h2>
          <button onClick={handleShowDropdown}>
            <span className="text-gray-500">
              <ArrowDown />
            </span>
          </button>
          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 top-12 z-50 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
              <p className=" truncate font-semibold text-gray-800">
                {user?.name}
              </p>
              <p className="text-xs text-gray-500 mb-2">{user?.email}</p>
              <div className="flex flex-col gap-4">
                <Link href="/profile">
                  <button className="text-sm md:text-md">
                    <span className="text-blue-600">👤</span> আমার প্রোফাইল
                  </button>
                </Link>
                <span
                  className="text-sm text-red-500 cursor-pointer md:text-md"
                  onClick={handleSignOut}
                >
                  ↩ সাইন আউট
                </span>
              </div>
            </div>
          )}{" "}
        </div>
      ) : (
        <>
          <Link href="/signin">সাইন ইন</Link>
          <Link href="/signup">
            <Button className="bg-[#05893E] rounded-md text-white">
              সাইন আপ
            </Button>
          </Link>
        </>
      )}
    </>
  );
  return (
    <div>
      {/* Authentication Loading */}
      {isPending ? (
        <div className="flex items-center gap-3">
          <span className="loading loading-spinner loading-md text-success"></span>

          <span className="text-sm text-gray-600 animate-pulse">
            লোড হচ্ছে...
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-4">{authLinks}</div>
      )}
    </div>
  );
};

export default UserInfo;
