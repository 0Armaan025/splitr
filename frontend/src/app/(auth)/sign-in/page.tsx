'use client';
import Link from 'next/link';
import React, { useState } from 'react'

type Props = {}

const SignInPage = (props: Props) => {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:4000/auth/login", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"

          },
          body: JSON.stringify({
            email,
            password: pass
          }),
          credentials: "include",
        }
      );

      const data = await response.json();

      if(!response.ok) {
        throw new Error(data.error || "Something is wrong");
      }

      console.log("User signed in");

      console.log(data);

      localStorage.setItem("token", data.token);
      // store in cookies
      document.cookie = `token=${data.token}; path=/; max-age=${7 * 24 * 60 * 60}; secure; samesite=strict`;
      // Cookies.set("token", data.token, {expires: 7, secure: true, sameSite: "strict"});
    } 
    catch(error:any) {
      console.error("Error while signing in: ", error);
      setError(error.message);
    }
    finally {
      setLoading(false);
    }
  }



  return (
    <div className="signInPage min-h-screen w-full h-full flex flex-row">

      <div className="box1 w-[70%] bg-green-500 flex flex-col justify-center items-center">
        <h3 className='text-4xl font-semibold'>Sign in</h3>
        <div className="inputFields mt-8 flex flex-col justify-center items-center space-y-4">

          <input type="email" placeholder='Email' className='w-96 px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-blue-800 transition-all'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="password" placeholder='Password' className='w-96 px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-blue-800 transition-all'
            onChange={(e) => setPass(e.target.value)} />
          <button className='mt-4 w-96 text-xl bg-blue-800/80 px-7 py-3 cursor-pointer hover:bg-blue-800 transition-all rounded-full text-white font-semibold'
          
          onClick={handleSignIn}>Sign In</button>
        </div>
      </div>
      <div className="box2 w-[30%] bg-blue-500 flex flex-col justify-center items-center">


        <h3 className='text-white font-semibold text-6xl'>New here?</h3>
        <h4 className='text-white font-medium text-2xl text-center mt-4'>To keep connected with us please<br />sign up with your personal info</h4>
        <p className='text-red-500 font-medium text-xl text-center mt-2'>{error}</p>
        <Link href="/sign-up">
          <button className='mt-8 w-64 text-xl bg-none border-2 border-white rounded-full px-7 py-3 hover:cursor-pointer hover:bg-white hover:text-black transition-all'
          
          >Sign Up</button>
        </Link>
      </div>

    </div>
  );
}

export default SignInPage