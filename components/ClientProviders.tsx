"use client";

import React from "react";
import GoogleMapsProvider from "@/components/maps/google-map-provider";
import { Provider } from "@/components/ui/provider";
import { SessionProvider } from "next-auth/react";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <GoogleMapsProvider>
            <SessionProvider>
                <Provider>{children}</Provider>
            </SessionProvider>
        </GoogleMapsProvider>
    );
}
