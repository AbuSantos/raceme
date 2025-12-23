"use client";
import { useState } from "react";
import { PositionTableSideMenu } from "./position"
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import { GoogleMap } from "@react-google-maps/api";
import Map from "../maps/map";
import { SecondDriverPage } from "../drivercomponents/second-driver";
import Image from "next/image";
import { SheetHeader } from "./sheetheader";
import { DriverList } from "../drivercomponents/driver-list";
import { RaceMap } from "../maps/map-box";
// import RaceMap from "../maps/map-box";


const HomeComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const y = useMotionValue(0);
    // start collapsed so the full-screen dark overlay isn't visible immediately
    const [expanded, setExpanded] = useState(false);

    const expandedHeight = "60vh";
    const collapsedHeight = "20vh";
    const overlayOpacity = useTransform(y, [0, 300], [0.5, 0]);

    return (
        <div >

            {/* mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            key="overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/40 z-40"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <PositionTableSideMenu setIsMenuOpen={setIsMenuOpen} />
                    </>
                )}
            </AnimatePresence>
            <div className="relative w-full">
                {
                    !isMenuOpen && (
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            aria-expanded={isMenuOpen}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                        >
                            <HamburgerMenuIcon className="w-6 h-6 text-white" />
                        </button>
                    )
                }
            </div>



            <div className="h-screen ">
                {/* <Map /> */}
                <RaceMap />
            </div>
            {expanded && (
                <motion.div
                    className="absolute inset-0 bg-black"
                    style={{ opacity: overlayOpacity }}
                    onClick={() => setExpanded(false)}
                />
            )}

            <motion.div
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                    if (info.offset.y > 100) {
                        setExpanded(false);
                    } else {
                        setExpanded(true);
                    }
                }}
                initial={{ y: 0 }}
                animate={{
                    height: expanded ? expandedHeight : collapsedHeight,
                    y: 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute bottom-0 left-0 right-0  bg-black/60  backdrop-blur-xl rounded-t-3xl shadow-lg overflow-y-auto"
            >
                {/* <div className="absolute inset-0 bg-black/60" /> */}
                <Image
                    src="/carImage.jpeg"
                    alt=""
                    fill
                    className="object-cover opacity-30 pointer-events-none "
                />
                {/* Drag handle */}
                <div className="w-full flex justify-center p-2">
                    <div className="w-12 h-1.5 bg-gray-400 rounded-full" />
                </div>
                <div className="relative z-10 px-2! pt-0   ">

                    {/* Parent kids data */}
                    <SheetHeader />
                    <DriverList />
                    {/* <SecondDriverPage /> */}
                </div>

            </motion.div>

        </div>
    )
}

export default HomeComponent
