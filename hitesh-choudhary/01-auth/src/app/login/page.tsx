"use client";

/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const page = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const onlogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/profile");
      setLoading(false);
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing" : "Login"}</h1>
      <hr />

      <label htmlFor="email">email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        className="p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600 text-black"
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        className="p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600 text-black"
      />
      <button
        onClick={onlogin}
        className="p-2 border border-gray-300 rounded-lg mb-4 outline-none focus:border-gray-600"
      >
        login here
      </button>
      <Link
        href="/signup"
        className="p-2 border border-gray-300 rounded-lg mb-4 outline-none focus:border-gray-600"
      >
        Visit signup page
      </Link>
    </div>
  );
};

export default page;
