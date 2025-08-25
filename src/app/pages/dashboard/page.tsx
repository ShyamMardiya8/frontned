"use client";
import { AppDispatch } from "@/features/store";
import { getUserDetails } from "@/services/apiCalls";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const data = dispatch(getUserDetails());
      console.info("🚀 ~ fetchUsers ~ data:", data);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return <></>;
};

export default page;
