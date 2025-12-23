"use client";

import { ReactNode } from "react";
import { LoadScript } from "@react-google-maps/api";

interface GoogleMapsProviderProps {
    children: ReactNode;
}

const GoogleMapsProvider = ({ children }: GoogleMapsProviderProps) => {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDxAZy6kbK4kkfYITNTFEa1mUXsCQFTS_4"
            libraries={["places"]}
        >
            {children}
        </LoadScript>
    );
};

export default GoogleMapsProvider