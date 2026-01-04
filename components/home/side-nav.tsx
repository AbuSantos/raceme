"use client"
import Image from "next/image";
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react";

const SideNavigation = () => {
    const { data: session, status } = useSession();

    if (status === "loading") return <div>Loading...</div>;

    if (!session) return <div>Not signed in</div>;

    if (!session?.user) return null;
    return (

        <nav className="flex justify-between  text-white py-3! " >
            <div className="flex items-center space-x-2!">
                <Image
                    src={session.user.image || "/default-avatar.png"}
                    alt={session.user.name || "User Avatar"}
                    width={24}
                    height={24}
                    className="rounded-full mb-4"
                />
                <small className="text-sm! font-bold mb-6">Hi, {session.user.name}</small>

            </div>

            <div>
                <button className="cursor-pointer" onClick={() => signOut()}>Sign Out</button>
            </div>


        </nav >
    )
}

export default SideNavigation
