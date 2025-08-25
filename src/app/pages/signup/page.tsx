"use client";
import { AppDispatch } from "@/features/store";
import { loginUser, signupUser } from "@/services/auth";
import { ErrorState, LoginData, validate } from "@/utility/validate";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Page = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ErrorState>({});
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof LoginData
  ) => {
    const { value } = e.target;
    setData({ ...data, [field]: value });

    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newErrors = validate(data);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const body = {
      email: data.email,
      password: data.password,
    };
    dispatch(signupUser(body));
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="block text-gray-700 text-sm mb-2">Email</label>
            <input
              type="text"
              placeholder="Enter email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={data.email}
              onChange={(e) => handleChange(e, "email")}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={data.password}
              onChange={(e) => handleChange(e, "password")}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
