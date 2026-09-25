"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Planlength from "./Planlength"
import Savelength from "./Savelength"


const Navber = () => {
    const pathname = usePathname()
    const link = <>
        <li> <Link href="/workouts" className={`   font-Inter font-semibold text-sm ${pathname === "/workouts" ? "text-[#C2F800] bg-[#1A2312] rounded-full px-4 py-1.5" : "text-[#9CA3AF]"
            } `}>Workouts</Link></li>
        <li> <Link href="/myplan" className={`  font-Inter font-semibold text-sm ${pathname === "/myplan" ? "text-[#C2F800] bg-[#1A2312] rounded-full px-4 py-1.5" : "text-[#9CA3AF]"} `}>My Plan</Link></li>

    </>
    return (
        <nav className=" bg-[#0C0D10] shadow-sm border-b border-[#1C1F26] ">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <Link href="/" className=" flex items-center gap-2.5 ">
                        <Image src="/assets/logo.png" width={28} height={28} alt="fitlog logo" ></Image>
                        <h3 className="font-Oswald font-black text-white text-xl">FITLOG</h3>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-5">
                       <Planlength/>
                        {/* button 2 */}
                        <Savelength/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navber