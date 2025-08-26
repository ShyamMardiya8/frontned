"use client";
import { AppDispatch } from "@/features/store";
import { getUserDetails } from "@/services/apiCalls";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { toast } from "react-toastify";
import { User, UserData } from "@/utility/interface";
import { AxiosResponse } from "axios";

const FetchData = ({ data }: { data: UserData[] }) => {
  console.info("🚀 ~ FetchData ~ data:", data);
  const columns = useMemo<MRT_ColumnDef<UserData>[]>(
    () => [
      { accessorKey: "firstName", header: "First Name", size: 150 },
      { accessorKey: "lastName", header: "Last Name", size: 150 },
      { accessorKey: "phoneNumber", header: "Phone Number", size: 150 },
      { accessorKey: "email", header: "Email", size: 150 },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return <MaterialReactTable table={table} />;
};

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // ✅ unwrap gives you typed `User`
        const data: AxiosResponse<User, any> = await dispatch(
          getUserDetails()
        ).unwrap();
        console.info("🚀 ~ fetchUsers ~ data:", data);

        if (data.statusCode === 200) {
          setData(data.data);
          toast.success(data.message);
        }
      } catch (err: any) {
        console.log(err.message);
        toast.error(err.message);
      }
    };

    fetchUsers();
  }, [dispatch]);

  console.log(data, "data from api");
  return <FetchData data={data} />;
};

export default Page;
