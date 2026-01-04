"use client";

import React from "react";
import GoogleMapsProvider from "@/components/maps/google-map-provider";
import { Provider } from "@/components/ui/provider";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <GoogleMapsProvider>
            <Provider>{children}</Provider>
        </GoogleMapsProvider>
    );
}
