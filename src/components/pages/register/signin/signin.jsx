"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function SigninPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") 

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
      <h1 className="text-2xl font-semibold">Sign in</h1>

      <button
        onClick={() => signIn("google", { callbackUrl })}
        className="px-4 py-2 rounded bg-blue-600 text-white"
      >
        Continue with Google
      </button>

      <button
        onClick={() => signIn("github", { callbackUrl })}
        className="px-4 py-2 rounded bg-neutral-800 text-white"
      >
        Continue with GitHub
      </button>
    </div>
  );
}
