import Image from "next/image"
import Link from "next/link"


const Navber = () => {
    const link = <>
        <li> <Link href="/workouts" className=" text-[#C2F800] font-Inter font-semibold text-sm bg-[#1A2312] rounded-full px-4 py-1.5 ">Workouts</Link></li>
        <li> <Link href="/" className=" text-[#9CA3AF] font-Inter font-semibold text-sm ">My Plan</Link></li>

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
                        <button> <a className="text-[#D1D5DB] text-sm font-Inter font-medium cursor-pointer ">Plan  <span className="bg-[#C2F800] rounded-full px-1.5 py-0.5 text-black font-bold">0</span></a></button>
                        {/* button 2 */}
                        <button>
                            <a className="text-[#9CA3AF] text-sm font-Inter font-medium  cursor-pointer">Saved  <span className="border border-[#2D313B] rounded-full px-1.5 py-0.5 text-[#D1D5DB] font-bold">0</span></a>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navber