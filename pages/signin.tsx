"use client"

import { signIn } from "next-auth/react"

export default function SignIn() {
    return (
        <div className="flex items-center justify-center align-middle h-screen bg-gray-900 text-white ">
            <button
                onClick={() => signIn("google")}
                className="cursor-pointer text-2xl!"
            >
                Sign in with Google
            </button>
        </div>

    )
}
