"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

import Planlength from "./Planlength"
import Savelength from "./Savelength"

const Navber = () => {
    const pathname = usePathname()
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)

    const link = (
        <>
            <li>
                <Link
                    href="/workouts"
                    onClick={() => setMenuOpen(false)}
                    className={`font-Inter font-semibold text-sm transition-all duration-300 ${
                        pathname === "/workouts"
                            ? "text-[#C2F800] bg-[#1A2312] rounded-full px-4 py-1.5"
                            : "text-[#9CA3AF] hover:text-[#C2F800]"
                    }`}
                >
                    Workouts
                </Link>
            </li>

            <li>
                <Link
                    href="/myplan"
                    onClick={() => setMenuOpen(false)}
                    className={`font-Inter font-semibold text-sm transition-all duration-300 ${
                        pathname === "/myplan"
                            ? "text-[#C2F800] bg-[#1A2312] rounded-full px-4 py-1.5"
                            : "text-[#9CA3AF] hover:text-[#C2F800]"
                    }`}
                >
                    My Plan
                </Link>
            </li>
        </>
    )

    const goHome = () => {
        setMenuOpen(false)
        router.push("/")
    }

    return (
        <>
            <nav
                className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0C0D10] shadow-sm border-b border-[#1C1F26]"
                suppressHydrationWarning
            >
                <div className="navbar container mx-auto px-4 sm:px-6 lg:px-0">

                    {/* Left */}
                    <div className="navbar-start">

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden btn btn-ghost text-[#C2F800] transition-transform duration-300 hover:scale-110"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                        >
                            {menuOpen ? (
                                <FiX className="h-5 w-5" />
                            ) : (
                                <FiMenu className="h-5 w-5" />
                            )}
                        </button>

                        {/* Logo */}
                        <Link
                            href="/"
                            className="hidden sm:flex items-center gap-2.5 transition-transform duration-300 hover:scale-105"
                        >
                            <Image
                                src="/assets/logo.png"
                                width={28}
                                height={28}
                                alt="fitlog logo"
                                className="transition-transform duration-500 hover:rotate-6"
                            />

                            <h3 className="font-Oswald font-black text-white text-xl">
                                FITLOG
                            </h3>
                        </Link>

                        {/* Mobile Menu */}
                        {menuOpen && (
                            <div className="absolute left-4 top-16 z-50 w-52 rounded-box bg-base-100 p-2 shadow-lg">
                                <ul className="menu menu-sm">

                                    {link}

                                    <li>
                                        <button
                                            type="button"
                                            onClick={goHome}
                                            className="font-Inter font-semibold text-sm text-[#9CA3AF] hover:text-[#C2F800] transition-all duration-300"
                                        >
                                            Home
                                        </button>
                                    </li>

                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Desktop Navigation */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {link}
                        </ul>
                    </div>

                    {/* Right */}
                    <div className="navbar-end">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
                            <Planlength />
                            <Savelength />
                        </div>
                    </div>

                </div>
            </nav>

            {/* Fixed Navbar Spacer */}
            <div className="h-[64px] w-full"></div>
        </>
    )
}

export default Navber