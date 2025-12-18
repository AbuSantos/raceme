"use client";
import { useState } from "react";
import { PositionTableSideMenu } from "./position"

const HomeComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
    return (
        <div>

            {/* mobile menu */}
            <div>
                {
                    isMenuOpen && (
                        <div>
                            <PositionTableSideMenu setIsMenuOpen={setIsMenuOpen} />
                        </div>
                    )
                }
            </div>



        </div>
    )
}

export default HomeComponent
