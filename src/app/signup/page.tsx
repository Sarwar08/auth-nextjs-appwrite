"use client";
import Link from "next/link";
import React,{useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {toast} from "react-hot-toast";

export default function SignUpPage() {
    const router = useRouter()
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });
    const [buttonDisabled, setButtondisabled] = React.useState(false);
    const [loading, setLoading] = useState(false);
    
    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup Success", response.data);
            router.push("/login")

        } catch (error: any) {
            console.log("Signup failed", error.message);
            toast.error(error.message)
        }
    };

    useEffect(()=>{
        if(user.email.length > 0 && 
            user.password.length > 0 && 
            user.username.length > 0){
            setButtondisabled(false);
        }else{
            setButtondisabled(true);
        }
    },[user]);


    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2  text-white">
                <h1 className="text-3xl">{loading ? "Processing...": "SIGN UP"}</h1>

                <hr className="mb-4 border-red-400 w-[200px]" />

                <div className="flex flex-col items-center justify-center py-2
        border border-white m-2
        ">
                    <label htmlFor="username">User Name</label>
                    <input
                        className="p-2 text-black"
                        id="username"
                        type="text"
                        value={user.username}
                        onChange={(e) => {
                            setUser({ ...user, username: e.target.value });
                        }}
                        placeholder="username"
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

                <div
                    className="flex flex-col items-center justify-center py-2
                    border border-white m-2
                    ">
                    <label
                        className="px-28 py-5" //border border-white
                        htmlFor="email">E-Mail</label>
                    <input
                        className="p-2 bg-yellow-400  text-black"
                        id="email"
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder="email"
                    />
                </div>
                <button
                    onClick={onSignup}
                    className="border border-white text-blue-950 font-bold bg-yellow-400
                    m-4 mb-12 p-2 rounded-lg"
                >
                    {buttonDisabled ? "No SignUp":"Sign Up"}
                </button>
                <Link href="/login">Visit Login page</Link>
            </div>
        </>
    );
}
