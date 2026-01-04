"use client";

import React from "react";

export default function SignInPage() {
    const handleSignIn = (e: React.MouseEvent) => {
        e.preventDefault();
        window.location.href = "/api/auth/signin/google";
    };

    return (
        <div className="flex items-center justify-center align-middle h-screen bg-gray-900 text-white ">
            <button onClick={handleSignIn} className="px-4 py-2 rounded bg-blue-600 text-white">
                Sign in with Google
            </button>
        </div>
    );
}
