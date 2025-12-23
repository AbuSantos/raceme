import Image from "next/image";

export const DriverCard = ({
    name,
    avatar,
    distance,
    car,
    rating,
}: {
    name: string;
    avatar: string;
    distance: string;
    car: string;
    rating: number;
}) => {
    return (
        <div
            className="
        flex items-center justify-between
        py-2! px-4!
        border-t! border-white/10! 
      "
        >
            <div className="flex items-center gap-4 ">
                <Image
                    src={avatar}
                    alt={name}
                    className="h-12 w-12 rounded-full object-cover "
                    width={48}
                    height={48}
                />

                <div>
                    <p className="text-white font-medium">{name}</p>

                    <div className="flex items-center gap-2 text-sm">
                        <div className="flex text-yellow-400">
                            {"★".repeat(rating)}
                            <span className="text-white/30">
                                {"★".repeat(5 - rating)}
                            </span>
                        </div>

                        <span className="text-white/50">
                            {distance} away
                        </span>
                    </div>

                    <p className="text-white/60 text-[10px]">
                        {car}
                    </p>
                </div>
            </div>

            <button
                className="rounded-full p-2! bg-linear-to-r! from-emerald-400! to-emerald-600! 
          font-medium! shadow-lg! hover:brightness-110! active:scale-95 transition! text-[12px]!" >
                REQUEST RACE
            </button>
        </div>
    );
}
