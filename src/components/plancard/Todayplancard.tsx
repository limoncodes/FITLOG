import { ThemeContext } from "@/app/theme-provider.tsx/page";
import Image from "next/image";
import Link from "next/link";
import {  useContext } from "react";
import { FiClock, FiStar } from "react-icons/fi";
import { HiFire } from "react-icons/hi";
import TodayRemovebutton from "./TodayRemovebutton";


const Todayplancard = () => {
    const { todayplan } = useContext(ThemeContext) as {
        todayplan: SingleTypeData[];
     
    }
    if (todayplan.length === 0) {
        return <div className="border border-dashed border-[#282A2D] rounded-xl h-75 w-full ">
            <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-white font-Oswald text-xl mb-2 font-bold ">NOTHING HERE YET</h2>
                <p className="text-[#A1A1AA] text-[12px] font-Inter mb-6">Browse the library and add a lift to get today moving.</p>
                <button className="text-black font-Inter font-semibold text-[12px] bg-[#C2F10D] py-2.5 px-6 rounded-full"><Link href="/workouts">
                    Go to workouts</Link></button>

            </div>

        </div>
    }

    return (
        <div className="flex flex-col gap-4">
            {todayplan.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="flex items-center justify-between rounded-2xl border border-[#252a35] bg-[#15181f] p-4"
                    >
                        {/* Left */}
                        <div className="flex items-center gap-4">
                            <Image
                                src={item.image}
                                width={144}
                                height={80}
                                alt={item.name}
                                className="h-20 w-36 rounded-xl object-cover"
                            />

                            <div>
                                <h3 className="text-base font-bold uppercase text-white">
                                    {item.name}
                                </h3>

                                <p className="mt-1 text-sm text-gray-400">
                                    {item.equipment}
                                </p>

                                {/* Stats */}
                                <div className="mt-2 flex items-center gap-4 text-sm text-gray-300">
                                    <span className="flex items-center gap-1.5">
                                        <FiClock className="text-[#baff00]" />
                                        {item.duration} min
                                    </span>

                                    <span className="flex items-center gap-1.5">
                                        <HiFire className="text-[#baff00]" />
                                        {item.caloriesBurned} kcal
                                    </span>

                                    <span className="flex items-center gap-1.5">
                                        <FiStar className="text-[#baff00]" />
                                        {item.rating}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <TodayRemovebutton item={item}/>
                       
                    </div>
                );
            })}
        </div>
    )
}

export default Todayplancard