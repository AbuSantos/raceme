import { DriverCard } from "./driver-card";

export const DriverList = () => {
    return (
        <div className="space-y-6 bg-black/40 rounded-lg border! border-gray-700! " >
            <DriverCard
                name="Femi"
                avatar="https://i.pravatar.cc/300?img=10"
                rating={4}
                distance="0.8 km"
                car="Nissan GTR"
            />

            <DriverCard
                name="Osas"
                avatar="https://i.pravatar.cc/300?img=13"
                rating={3}
                distance="1.1 km"
                car="Honda Civic"
            />

            <DriverCard
                name="Ahmed"
                avatar="https://i.pravatar.cc/300?img=16"
                rating={5}
                distance="5.0 km"
                car="Toyota Supra"
            />
        </div>
    );
}
