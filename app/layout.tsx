import "@/styles/globals.css";
import ClientProviders from "../components/ClientProviders";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head />
            <body>
                <ClientProviders>{children}</ClientProviders>
            </body>
        </html>
    );
}
