"use client";

/* eslint-disable react-hooks/rules-of-hooks */
// import { axios } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2>Signup</h2>
      <hr />

      <label htmlFor="username">username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600"
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
        className="p-2 border border-gray-300 rounded-lg mb-4 outline-none focus:border-gray-600"
      >
        Signup here
      </button>
      <Link
        href="/login"
        className="p-2 border border-gray-300 rounded-lg mb-4 outline-none focus:border-gray-600"
      >
        Visit login page
      </Link>
    </div>
  );
};

export default page;
