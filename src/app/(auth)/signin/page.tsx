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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-7">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              সাইন ইন
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
            </p>
          </div>

          {/* Form */}
          <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
            {/* Email */}
            <TextField
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
              <Label className="text-sm font-medium text-gray-700">ইমেইল</Label>

              <Input placeholder="john@example.com" className="mt-1" />

              <FieldError />
            </TextField>

            {/* Password */}
            {/* Password */}
            <TextField
              className="w-full "
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
              <Label> পাসওয়ার্ড</Label>
              <InputGroup>
                <InputGroup.Input
                  className="w-full"
                  type={isVisible ? "text" : "password"}
                />
                <InputGroup.Suffix className="pe-0">
                  <Button
                    isIconOnly
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    size="sm"
                    variant="ghost"
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
              <Description className="text-xs text-gray-500">
                কমপক্ষে ৮ অক্ষর, একটি বড় হাতের অক্ষর এবং একটি সংখ্যা দিন
              </Description>
            </TextField>

            {/* Buttons */}
            <div className="flex gap-3 w-full">
              <Button type="submit" className="flex-1">
                <Check />
                Sign In
              </Button>

              <Button type="reset" variant="secondary" className="flex-1">
                Reset
              </Button>
            </div>
            {/* Modern Divider */}
            <div className="flex items-center gap-4 my-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />

              <span className="text-sm font-medium text-gray-500">অথবা</span>

              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-300 to-gray-300" />
            </div>

            {/* social */}
            <div className="flex justify-between gap-2">
              <GoogleSocial />
              <GithubSocial />
            </div>
            {/* Sign Up */}
            <div className="text-center pt-2">
              <span className="text-sm text-gray-500">অ্যাকাউন্ট নেই? </span>

              <Link
                href="/signup"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
              >
                সাইন আপ করুন
              </Link>
            </div>
          </Form>

          {/* Home */}
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
