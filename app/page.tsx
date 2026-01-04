import HomeComponent from "@/components/home/home-component";
import { auth } from "@/auth";

export default async function Page() {
    const session = await auth();
    if (!session) {
        // If no session, redirect to sign-in page
        return (
            <div>
                <main>
                    <h1>Please sign in to continue</h1>
                    <a href="/signin">Sign In</a>
                </main>
            </div>
        );
    }
    console.log("User session:", session);
    // keep server-side hooks here if needed (auth, data fetching)
    return (
        <div>
            <main>
                <HomeComponent />
            </main>
        </div>
    );
}
