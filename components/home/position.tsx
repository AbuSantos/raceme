"use client";

import { Table } from "@chakra-ui/react"
import { Cross1Icon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
import SideNavigation from "./side-nav";

type PositionTableProps = {
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

export const PositionTableSideMenu = ({ setIsMenuOpen }: PositionTableProps) => {
    return (
        <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed left-0 top-0 h-full w-4/5 max-w-sm bg-gray-950 p-2 z-50 shadow-lg"
        >
            <SideNavigation />
            <Table.Root size="sm" stickyHeader className="p-2  w-4/5 h-screen">
                <Table.Header>
                    <Table.Row bg="bg.subtle">
                        <Table.ColumnHeader className="w-[10%] ">Image</Table.ColumnHeader>
                        <Table.ColumnHeader className="w-3/5">Name</Table.ColumnHeader>
                        <Table.ColumnHeader className="w-[15%]">Pos</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end" className="">Top Speed</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {items.map((item) => (
                        <Table.Row key={item.id}>
                            <Table.Cell>
                                <Image
                                    src={item.image}
                                    alt="Drivers Image"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                            </Table.Cell>
                            <Table.Cell >{item.driverName}</Table.Cell>
                            <Table.Cell textAlign="middle">{item.position}</Table.Cell>
                            <Table.Cell textAlign="end">{item.price}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </motion.aside >

    )
}

const items = [
    { id: 1, image: "https://i.pravatar.cc/300?img=12", driverName: "Femi", position: 1, price: 999.99 },
    { id: 2, image: "https://i.pravatar.cc/300?img=13", driverName: "Osas", position: 1, price: 49.99 },
    { id: 3, image: "https://i.pravatar.cc/300?img=1", driverName: "kevwe", position: 1, price: 150.0 },
    { id: 4, image: "https://i.pravatar.cc/300?img=10", driverName: "Ahmed", position: 1, price: 799.99 },
    { id: 5, image: "https://i.pravatar.cc/300?img=11", driverName: "Zainab", position: 1, price: 199.99 },
    { id: 6, image: "https://i.pravatar.cc/300?img=16", driverName: "Calid", position: 1, price: 199.99 },
    { id: 7, image: "https://i.pravatar.cc/300?img=17", driverName: "Niphkeys", position: 1, price: 199.99 },
    { id: 8, image: "https://i.pravatar.cc/300?img=18", driverName: "Bnxn", position: 1, price: 199.99 },
]
