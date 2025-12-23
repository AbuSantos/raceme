"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string;

export const RaceMap = () => {
    const mapContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mapContainer.current) return;

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/kingjulien/cmjj35f3l005r01sdc5jc97l2",
            center: [3.3792, 6.5244],
            zoom: 13,
        });

        console.log("Mapbox access token:", map._container);

        map.on("load", () => {
            map.setPitch(60);
            map.setBearing(-20);
            map.dragRotate.disable();
            map.touchZoomRotate.disableRotation();
        });
        // map.easeTo({
        //     center: [lng, lat],
        //     bearing: heading,
        //     pitch: 60,
        //     duration: 500,
        //     easing: t => t,
        // });
        return () => map.remove();
    }, []);

    return (
        <div
            ref={mapContainer}
            style={{
                position: "absolute",
                inset: 0,
            }}
        />
    );
}
