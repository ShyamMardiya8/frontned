"use client";
import { addTodo } from "@/features/slice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  return (
    <>
      <h1>hello world</h1>
      <p>ne zha 2</p>
    </>
  );
}
