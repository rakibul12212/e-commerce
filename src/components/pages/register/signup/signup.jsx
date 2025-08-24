"use client";
import { signIn } from "next-auth/react";

export default function SignupPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
      <h1 className="text-2xl font-semibold">Create an account</h1>
      <button
        onClick={() => signIn("google")}
        className="px-4 py-2 rounded bg-blue-600 text-white"
      >
        Sign up with Google
      </button>
      <button
        onClick={() => signIn("github")}
        className="px-4 py-2 rounded bg-neutral-800 text-white"
      >
        Sign up with GitHub
      </button>
    </div>
  );
}
