import { signIn } from "@/auth";

export default async function SignInPage() {
    return (
        <div className="flex items-center justify-center align-middle h-screen bg-gray-900 text-white ">
            <form action={async () => {
                "use server"
                await signIn("google");
            }                    
            }

            >

                <button className="px-4 py-2 rounded bg-blue-600 text-white">
                    Sign in with Google
                </button>
            </form>
        </div>
    );
}
