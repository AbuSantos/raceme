import { Table } from "@chakra-ui/react"
import { div } from "framer-motion/client"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"

type PositionTableProps = {
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

export const PositionTableSideMenu = ({ setIsMenuOpen }: PositionTableProps) => {
    return (
        <div className="p-2">


            <Table.Root size="sm" stickyHeader className="p-2">
                {/* <button onClick={() => setIsMenuOpen(false)}>Close Menu</button> */}

                <Table.Header>
                    <Table.Row bg="bg.subtle">
                        <Table.ColumnHeader className="w-[10%] ">Image</Table.ColumnHeader>
                        <Table.ColumnHeader className="w-1/5">Name</Table.ColumnHeader>
                        <Table.ColumnHeader className="w-1/5">Position</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end" className="">Top Speed</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {items.map((item) => (
                        <Table.Row key={item.id}>
                            <Table.Cell>
                                < Image
                                    src={item.image}
                                    alt="Drivers Image"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                            </Table.Cell>
                            <Table.Cell>{item.category}</Table.Cell>
                            <Table.Cell textAlign="end">{item.price}</Table.Cell>
                            <Table.Cell textAlign="end">{item.price}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>

    )
}

const items = [
    { id: 1, image: "https://i.pravatar.cc/300?img=12", category: "Femi", price: 999.99 },
    { id: 2, image: "https://i.pravatar.cc/300?img=13", category: "Osas", price: 49.99 },
    { id: 3, image: "https://i.pravatar.cc/300?img=1", category: "kevwe", price: 150.0 },
    { id: 4, image: "https://i.pravatar.cc/300?img=10", category: "Ahmed", price: 799.99 },
    { id: 5, image: "https://i.pravatar.cc/300?img=11", category: "Zainab", price: 199.99 },
]
