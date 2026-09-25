"use client"
import { ThemeContext } from "@/app/theme-provider.tsx/page"
import Link from "next/link"
import { useContext } from "react"


const Planlength = () => {
    const { todayplan } = useContext(ThemeContext) as {
        todayplan:SingleTypeData[]
    }
    return (
        <button> <Link href="/myplan" className="text-[#D1D5DB] text-sm font-Inter font-medium cursor-pointer ">Plan  <span className="bg-[#C2F800] rounded-full px-1.5 py-0.5 text-black font-bold">{todayplan.length}</span></Link></button>
    )
}

export default Planlength