import HomeComponent from "@/components/home/home-component";
import { auth } from "@/auth";

export default async function Page() {
    // keep server-side hooks here if needed (auth, data fetching)
    return (
        <div>
            <main>
                <HomeComponent />
            </main>
        </div>
    );
}
