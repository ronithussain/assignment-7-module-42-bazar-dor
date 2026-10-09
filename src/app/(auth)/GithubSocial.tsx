import {signIn } from "@/lib/auth-client";
import { FaGithub } from "react-icons/fa";
import { toast } from "sonner";

const GithubSocial = () => {
  const handleGithubSignIn = async () => {
    const { data, error } = await signIn.social({
      provider: "github",
    });
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
        onClick={handleGithubSignIn}
        className="
        w-full
        py-3
        px-3
        flex items-center justify-center gap-1
        text-xs
        md:text-sm
        rounded-full
        border border-gray-300
        bg-white
        text-gray-700
        font-medium
        shadow-sm
        transition-all duration-200
        hover:bg-gray-50
        hover:shadow-md
        active:scale-[0.98]
      "
      >
        {/* Google Logo */}

        <FaGithub size={20} />
        <span>GitHub দিয়ে চালিয়ে যান</span>
      </button>
    </div>
  );
};

export default GithubSocial;