"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-3xl">LOGIN</h1>

        <hr className="mb-4 border-red-400 w-[200px]" />

        <div 
        className="flex flex-col items-center justify-center py-2
        border border-white m-2
        ">
          <label 
          className="px-20 py-5" //border border-white
          htmlFor="email">E-Mail</label>
          <input
            className="p-2 bg-yellow-400 text-black"
            id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email"
          />
        </div>

        <div className="flex flex-col items-center justify-center py-2
        border border-white m-2 
        ">
          <label htmlFor="password">Password</label>
          <input
            className="p-2 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
          />
        </div>

        
        <button
        onClick={onLogin}
        className="border border-white text-blue-950 font-bold bg-yellow-400
        m-4 mb-12 p-2 rounded-lg"
        >Login
        </button>
        <h2>Dont have account</h2>
        <Link href="/signup">SignUp</Link>
      </div>
    </>
  );
}
