"use client"

import { ThemeContext } from "@/app/theme-provider.tsx/page"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import { FiClock, FiStar } from "react-icons/fi"
import { HiFire } from "react-icons/hi"
import SaveRemovedbutton from "./SaveRemovedbutton"

const Todayplancard = () => {
    const { save, savesort } = useContext(ThemeContext) as {
        save: SingleTypeData[]
        savesort: SingleTypeData[]
    }

    if (savesort.length === 0) {
        return (
            <div className="border border-dashed border-[#282A2D] rounded-xl h-75 w-full animate-[fadeInUp_0.5s_ease-out_both]">
                <div className="flex flex-col items-center justify-center h-full px-4 text-center">

                    <h2 className="text-white font-Oswald text-xl mb-2 font-bold max-sm:text-lg">
                        NOTHING HERE YET
                    </h2>

                    <p className="text-[#A1A1AA] text-[12px] font-Inter mb-6">
                        Browse the library and add a lift to get today moving.
                    </p>

                    <button className="text-black font-Inter font-semibold text-[12px] bg-[#C2F10D] py-2.5 px-6 rounded-full transition-all duration-300 hover:scale-105">
                        <Link href="/workouts">
                            Go to workouts
                        </Link>
                    </button>

                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-4 w-full">

            {savesort.map((item, index) => {

                return (
                    <div
                        key={item.id}
                        className="flex items-center justify-between rounded-2xl border border-[#252a35] bg-[#15181f] p-4 w-full min-w-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-[fadeInUp_0.5s_ease-out_both] max-sm:flex-col max-sm:items-stretch max-sm:gap-4 max-sm:p-3"
                        style={{
                            animationDelay: `${index * 100}ms`,
                        }}
                    >

                        {/* Left */}
                        <div className="flex items-center gap-4 min-w-0 flex-1 max-sm:w-full">

                            {/* Image */}
                            <Image
                                src={item.image}
                                width={144}
                                height={80}
                                alt={item.name}
                                className="h-20 w-36 shrink-0 rounded-xl object-cover max-sm:h-20 max-sm:w-24"
                            />

                            {/* Information */}
                            <div className="min-w-0 flex-1">

                                <h3 className="text-base font-bold uppercase text-white break-words max-sm:text-sm">
                                    {item.name}
                                </h3>

                                <p className="mt-1 text-sm text-gray-400 truncate max-sm:text-xs">
                                    {item.equipment}
                                </p>

                                {/* Stats */}
                                <div className="mt-2 flex items-center gap-4 text-sm text-gray-300 flex-wrap max-sm:gap-x-3 max-sm:gap-y-1 max-sm:text-xs">

                                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                                        <FiClock className="text-[#baff00] shrink-0" />
                                        {item.duration} min
                                    </span>

                                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                                        <HiFire className="text-[#baff00] shrink-0" />
                                        {item.caloriesBurned} kcal
                                    </span>

                                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                                        <FiStar className="text-[#baff00] shrink-0" />
                                        {item.rating}
                                    </span>

                                </div>
                            </div>
                        </div>

                        {/* Right / Buttons */}
                        <div className="shrink-0 max-sm:w-full">
                            <SaveRemovedbutton item={item} />
                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default Todayplancard