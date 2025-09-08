"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignup = (e) => {
    e.preventDefault();
    console.log("Signup with:", email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Create an Account
        </h1>

       
        <form onSubmit={handleEmailSignup} className="flex flex-col gap-4 mb-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center gap-2 mb-4">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        
        <div className="flex flex-col gap-3">
          <button
            onClick={() => signIn("google")}
            className="w-full px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
          >
            Sign up with Google
          </button>
          <button
            onClick={() => signIn("github")}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-900 transition"
          >
            Sign up with GitHub
          </button>
        </div>

        <p className="text-sm text-gray-500 text-center mt-4">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
