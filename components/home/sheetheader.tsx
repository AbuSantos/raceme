import Image from "next/image";

export const SheetHeader = () => {
    return (
        <div className="mb-3">
            <div className="flex items-center justify-between py-2!">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <span className="text-emerald-400 text-lg">

                            <Image
                                src="/carsheet.png"
                                alt="Location Icon"
                                width={25}
                                height={30}
                            />

                        </span>
                    </div>

                </div>
                <div>
                    <p className="text-white text-lg! font-medium!">
                        5 drivers nearby
                    </p>
                    <p className="text-emerald-400 text-sm! font-medium!">
                        Nearest: 0.8 km
                    </p>
                </div>



            </div>
        </div>
    );
}

