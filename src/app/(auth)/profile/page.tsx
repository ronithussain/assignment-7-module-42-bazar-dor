"use client";

import { updateUser, useSession } from "@/lib/auth-client";
import Image from "next/image";
import { useState } from "react";

export default function ProfilePage() {
  const [show, setShow] = useState(false);

  const { data: session } = useSession();

  const user = session?.user;

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    console.log(newUserData);

    // console.log(newUserData)

    await updateUser({
      ...newUserData,
    });
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="container mx-auto max-w-5xl min-h-screen  px-6 py-10">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">আমার প্রোফাইল</h1>

        <p className="mt-1 text-sm text-gray-500">একাউন্টের তথ্য এখানে দেখুন</p>
      </div>

      {/* Profile Card */}
      <div className="card mb-6 rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="card-body flex flex-row items-center justify-between gap-4 p-5">
          {/* Avatar + Info */}
          <div className="flex min-w-0 items-center gap-4">
            <div className="avatar">
              <div className="mask mask-squircle w-24">
                {user?.image ? (
                  <Image
                    width={24}
                    height={24}
                    src={(user?.image as string) || "/default-avatar.png"}
                    alt={(user?.name as string) || "user"}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-green-600 text-white font-bold text-xl">
                    {user?.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                )}
              </div>
            </div>

            <div className="min-w-0">
              <h2 className="text-lg font-semibold text-gray-900">
                {user?.name}
              </h2>

              <p className="break-all text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>

          {/* Edit Button */}
          <button
            onClick={handleShow}
            type="button"
            className="btn btn-outline btn-sm shrink-0 rounded-lg border-red-400 text-red-500 hover:bg-red-500 hover:text-white"
          >
            ✎ এডিট
          </button>
        </div>
      </div>

      {/* Information Card */}
      {show && (
        <form onSubmit={handleUpdateProfile}>
          <div className="card rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="card-body p-6">
              <h3 className="mb-6 text-base font-semibold text-gray-900">
                ব্যক্তিগত তথ্য
              </h3>

              {/* Name Input */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  নাম
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="আপনার নাম লিখুন"
                  className="input input-bordered h-11 w-full rounded-lg border-gray-300 bg-white"
                />
              </div>
              {/* Name Input */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Image
                </label>

                <input
                  name="image"
                  type="url"
                  placeholder="Image Url"
                  className="input input-bordered h-11 w-full rounded-lg border-gray-300 bg-white"
                />
              </div>

              {/* Update Button */}
              <button
                type="submit"
                className="btn h-11 min-h-11 w-full rounded-lg border-0 bg-green-600 font-medium text-white hover:bg-green-700"
              >
                আপডেট
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
