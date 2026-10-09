"use client";
import {signIn } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

const GoogleSocial = () => {
  const handleGoogleSignIn = async () => {
    const { data, error } = await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    // console.log(data);
    if (data) {
      toast.success("সফলভাবে সাইন ইন হয়েছে!");
    } else {
      toast.error(error?.message || "সাইন ইন করতে সমস্যা হয়েছে!");
    }
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="
        w-full
        py-3
        px-3
        flex items-center justify-center gap-1
        rounded-full
        border border-gray-300
        bg-white
        text-gray-700
        text-xs
        md:text-sm
        font-medium
        shadow-sm
        transition-all duration-200
        hover:bg-gray-50
        hover:shadow-md
        active:scale-[0.98]
      "
      >
        {/* Google Logo */}
      <FcGoogle size={20} />

        <span>Google দিয়ে চালিয়ে যান</span>
      </button>
    </div>
  );
};

export default GoogleSocial;