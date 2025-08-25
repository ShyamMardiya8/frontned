"use client";
import { AppDispatch } from "@/features/store";
import { loginUser } from "@/services/auth";
import { setCookie } from "@/utility/cookieFunctions";
import { ErrorState, LoginData, validate } from "@/utility/validate";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Page = () => {
  const [data, setData] = useState<LoginData>({ email: "", password: "" });
  const [errors, setErrors] = useState<ErrorState>({});
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof LoginData
  ) => {
    const { value } = e.target;
    setData({ ...data, [field]: value });

    console.info("🚀 ~ handleChange ~ errors[field]:", errors[field]);
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate(data);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const dispatchValue = dispatch(loginUser(data))
      .then((res: any) => {
        const { generateToken, refreshToken } = res?.payload?.data;
        setCookie("access_token", generateToken);
        setCookie("refresh_token", refreshToken);
      })
      .catch((err) => console.log(err));
    console.info("🚀 ~ handleSubmit ~ dispatchValue:", dispatchValue);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={data.email}
              onChange={(e) => handleChange(e, "email")}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={data.password}
              onChange={(e) => handleChange(e, "password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition-all duration-300"
          >
            Login
          </button>
          <p className="text-black text-sm text-center">
            Don&apos;t have an account?{" "}
            <Link href="/pages/signup" className="text-sm text-[#000084]">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
