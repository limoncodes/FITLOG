import { ThemeContext } from "@/app/theme-provider.tsx/page"
import Link from "next/link"
import { useContext } from "react"


const Savelength = () => {
   const { save } = useContext(ThemeContext) as {
           save:SingleTypeData[]
       }
    return (
        <button>
            <Link href="/myplan" className="text-[#9CA3AF] text-sm font-Inter font-medium  cursor-pointer">Saved  <span className="border border-[#2D313B] rounded-full px-1.5 py-0.5 text-[#D1D5DB] font-bold">{save.length}</span></Link>
        </button>
    )
}

export default Savelength