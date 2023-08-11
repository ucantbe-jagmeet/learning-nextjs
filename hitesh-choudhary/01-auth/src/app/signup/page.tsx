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
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      setLoading(false);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2  text-black">
      <h2 className="text-white text-2xl capitalize">
        {loading ? "Processing" : "signup"}
      </h2>
      <hr />

      <label htmlFor="username">username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className=" p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600"
      />
      <label htmlFor="email">email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        className="p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600"
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        className="p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600"
      />
      <button
        onClick={onSignup}
        type="submit"
        className="p-2 border border-gray-300 rounded-lg mb-4 outline-none focus:border-gray-600 text-white"
      >
        {buttonDisabled ? "No signup" : "Signup"}
      </button>
      <Link
        href="/login"
        className="p-2 border border-gray-300 rounded-lg mb-4 outline-none focus:border-gray-600 text-white"
      >
        Visit login page
      </Link>
    </div>
  );
};

export default page;
