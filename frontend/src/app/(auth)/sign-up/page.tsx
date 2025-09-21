'use client';
import Link from 'next/link';
import React, { useState } from 'react'
import Cookies from "js-cookie";

type Props = {}

const SignUpPage = (props: Props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`http://localhost:4000/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password: pass,
        }),
        credentials: "include",
        // to tore jwt
      });

      const data = await res.json();

      if(!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      console.log("User signed up:", data);

      localStorage.setItem("token", data.token);
      Cookies.set("token", data.token, {expires: 7, secure: true, sameSite: "strict"});

      
      // the backend DOES NOT send JWT for registration, so no need to do anything here

      window.location.href="/dashboard";
    }
    catch(error: any) {
      setError(error.message || "Something went wrong");
    }
    finally {

      setLoading(false);
    }


  }



  return (
    <div className="signUpPage min-h-screen w-full h-full flex flex-row">
      <div className="box1 w-[30%] bg-green-500 flex flex-col justify-center items-center">


        <h3 className='text-white font-semibold text-6xl'>Welcome Back!</h3>
        <h4 className='text-white font-medium text-2xl text-center mt-4'>To keep connected with us please<br />login with your personal info</h4>
        <Link href="/sign-in">
          <button className='mt-8 w-64 text-xl bg-none border-2 border-white rounded-full px-7 py-3 hover:cursor-pointer hover:bg-white hover:text-black transition-all'>Sign In</button>
        </Link>
      </div>
      <div className="box2 w-[70%] bg-blue-500 flex flex-col justify-center items-center">
        <h3 className='text-4xl font-semibold'>Create Account</h3>
        <div className="inputFields mt-8 flex flex-col justify-center items-center space-y-4">
          <input type="text" placeholder='Name' className='w-96 px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-blue-800 transition-all'
            onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder='Email' className='w-96 px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-blue-800 transition-all'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="password" placeholder='Password' className='w-96 px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-blue-800 transition-all'
            onChange={(e) => setPass(e.target.value)} />

          {error && <p className='text-red-600 font-medium'>{error}</p>}

          <button
          onClick={handleSignUp}
          disabled={loading}

          className='mt-4 w-96 text-xl bg-blue-800/80 px-7 py-3 cursor-pointer hover:bg-blue-800 transition-all rounded-full text-white font-semibold'>{loading?"Signing up..." : "Sign up"}</button>
        </div>
      </div>

    </div>
  );
}

export default SignUpPage