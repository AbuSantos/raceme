"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string;

export const RaceMap = () => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const driversRef = useRef([
        {
            id: "me",
            lng: 3.3792,
            lat: 6.5244,
            heading: 0,
        },
        {
            id: "rival",
            lng: 3.381,
            lat: 6.525,
            heading: 180,
        },
    ]);

    const mapRef = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (!mapContainer.current || mapRef.current) return;

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: process.env.NEXT_PUBLIC_MAP_BOX_STYLE_URL as string,
            center: [3.3792, 6.5244],
            zoom: 13,
        });

        mapRef.current = map;

        map.on("load", async () => {
            // Camera feel
            map.setPitch(60);
            map.setBearing(-20);
            map.dragRotate.disable();
            map.touchZoomRotate.disableRotation();
            map.setPaintProperty("background", "background-color", "#05070a");
            const desaturateLayers = [
                "road",
                "road-secondary-tertiary",
                "road-primary",
                "road-motorway",
                "road-trunk",
                "building",
                "landuse",
            ];
            map.addLayer({
                id: "drivers-glow",
                type: "circle",
                source: "drivers",
                paint: {
                    "circle-radius": 10,
                    "circle-color": "#2EFF8A",
                    "circle-opacity": 0.15,
                },
            });
            map.addLayer({
                id: "race-route-glow",
                type: "line",
                source: "race-route",
                paint: {
                    "line-color": "#00E5FF",
                    "line-width": 8,
                    "line-opacity": 0.2,
                },
            });

            map.addLayer({
                id: "race-route-core",
                type: "line",
                source: "race-route",
                paint: {
                    "line-color": "#00E5FF",
                    "line-width": 3,
                },
            });


            desaturateLayers.forEach(layer => {
                if (map.getLayer(layer)) {
                    map.setPaintProperty(layer, "line-color", "#6b7280");
                    map.setPaintProperty(layer, "line-opacity", 0.35);
                }
            });



            // Load car icon
            const image = await map.loadImage("/movingcar.png");
            if (!map.hasImage("car")) {
                map.addImage("car", image.data, { sdf: true });
            }

            // Drivers source
            map.addSource("drivers", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [],
                },
            });

            map.addLayer({
                id: "drivers-layer",
                type: "symbol",
                source: "drivers",
                layout: {
                    "icon-image": "car",
                    "icon-size": 0.6,
                    "icon-rotate": ["get", "heading"],
                    "icon-rotation-alignment": "map",
                    "icon-allow-overlap": true,
                },
                paint: {
                    "icon-color": "#2EFF8A",
                },
            });

            // Radius source
            // map.addSource("radius", {
            //     type: "geojson",
            //     data: {
            //         type: "Feature",
            //         geometry: {
            //             type: "Point",
            //             coordinates: [3.3792, 6.5244],
            //         },
            //     },
            // });

            map.addLayer({
                id: "radius-layer",
                type: "circle",
                source: "radius",
                paint: {
                    "circle-radius": {
                        stops: [
                            [0, 0],
                            [20, 300],
                        ],
                        base: 2,
                    },
                    "circle-color": "#00E5FF",
                    "circle-opacity": 0.08,
                    "circle-stroke-color": "#00E5FF",
                    "circle-stroke-width": 1,
                },
            });
        });
        // setInterval(() => {
        //     driversRef.current = driversRef.current.map(d => {
        //         const speed = 0.00005;
        //         const rad = (d.heading * Math.PI) / 180;

        //         return {
        //             ...d,
        //             lng: d.lng + Math.cos(rad) * speed,
        //             lat: d.lat + Math.sin(rad) * speed,
        //             heading: (d.heading + (Math.random() * 10 - 5)) % 360,
        //         };
        //     });

        //     updateDrivers();
        //     followDriver(driversRef.current[0]); // follow "me"
        // }, 700);

        return () => {
            map.remove();
            mapRef.current = null;
        };
    }, []);

    const updateDrivers = () => {
        const map = mapRef.current;
        if (!map) return;

        const source = map.getSource("drivers") as mapboxgl.GeoJSONSource;
        if (!source) return;

        source.setData({
            type: "FeatureCollection",
            features: driversRef.current.map(d => ({
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [d.lng, d.lat],
                },
                properties: {
                    heading: d.heading,
                },
            })),
        });
    };

    const followDriver = (driver) => {
        const map = mapRef.current;
        if (!map) return;

        map.easeTo({
            center: [driver.lng, driver.lat],
            bearing: driver.heading,
            pitch: 60,
            zoom: 15,
            duration: 500,
            easing: t => t,
        });
    };


    return (
        <div
            ref={mapContainer}
            style={{
                position: "absolute",
                inset: 0,
            }}
        />
    );
};
