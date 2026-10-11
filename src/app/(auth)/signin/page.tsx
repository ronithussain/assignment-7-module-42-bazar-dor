"use client";
import { signIn } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import GoogleSocial from "../GoogleSocial";
import GithubSocial from "../GithubSocial";

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await signIn.email({
      ...user,
      callbackURL: "/",
    });

    console.log(data, error);

    if (data) {
      toast.success("সফলভাবে সাইন ইন হয়েছে!");
    } else {
      toast.error(error?.message || "সাইন ইন করতে সমস্যা হয়েছে!");
    }
  };

  return (
   <div className="min-h-screen bg-[#f8fbf8] flex items-center justify-center px-4 py-10 font-sans">
      <div className="w-full max-w-lg">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            সাইন ইন
          </h2>
          <p className="text-sm text-gray-500">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-8">
          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            
            {/* Email */}
            <TextField
              className="w-full"
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-sm font-semibold text-gray-800 mb-1.5 block">ইমেইল</Label>
              <Input 
                placeholder="you@example.com" 
                className="w-full rounded-lg border-gray-200 focus:border-green-600 focus:ring-green-600 py-2.5 px-3 text-sm outline-none" 
              />
              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              className="w-full"
              name="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label className="text-sm font-semibold text-gray-800 mb-1.5 block">পাসওয়ার্ড</Label>
              <InputGroup className="flex w-full rounded-lg border border-gray-200 focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 overflow-hidden">
                <InputGroup.Input
                  className="w-full border-0 focus:ring-0 py-2.5 px-3 text-sm placeholder-gray-400"
                  type={isVisible ? "text" : "password"}
                  placeholder="আপনার পাসওয়ার্ড দিন"
                />
                <InputGroup.Suffix className="flex items-center pr-2 bg-white">
                  <Button
                    isIconOnly
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-gray-600"
                    onPress={() => setIsVisible(!isVisible)}
                  >
                    {isVisible ? (
                      <Eye className="size-4" />
                    ) : (
                      <EyeSlash className="size-4" />
                    )}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>
              <Description className="text-xs text-gray-500 mt-1.5 block">
                কমপক্ষে ৮ অক্ষর, একটি বড় হাতের অক্ষর এবং একটি সংখ্যা দিন
              </Description>
              <FieldError />
            </TextField>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full bg-[#15803d] hover:bg-[#166534] text-white font-semibold py-3 rounded-lg transition-colors mt-2 flex items-center justify-center gap-2"
            >
              <Check className="size-4" />
              সাইন ইন করুন
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-2">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm font-medium text-gray-500">অথবা</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Social Login */}
            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <GoogleSocial />
              <GithubSocial />
            </div>

            {/* Sign Up Link */}
            <div className="text-center pt-4">
              <span className="text-sm text-gray-600">অ্যাকাউন্ট নেই? </span>
              <Link
                href="/signup"
                className="text-sm font-bold text-[#15803d] hover:text-[#166534] hover:underline"
              >
                সাইন আপ করুন
              </Link>
            </div>
          </Form>

          {/* Home Link */}
          <div className="mt-6 pt-5 border-t border-gray-100 text-center">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-800 transition"
            >
              ← হোম পেজে ফিরে যান
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
