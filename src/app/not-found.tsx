
"use client"

import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { FiArrowLeft, FiHome, FiRefreshCw } from "react-icons/fi"

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        const handlePopState = () => {
            // If there is no previous page, go to home
            if (window.history.length <= 1) {
                router.replace("/")
            }
        }

        window.addEventListener("popstate", handlePopState)

        return () => {
            window.removeEventListener("popstate", handlePopState)
        }
    }, [router])

    const handleBack = () => {
        if (window.history.length > 1) {
            router.back()
        } else {
            router.push("/")
        }
    }

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0D10] px-4 py-16">

            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C2F800]/10 blur-3xl animate-pulse sm:h-96 sm:w-96" />

            {/* Decorative Circles */}
            <div className="pointer-events-none absolute left-[8%] top-[15%] h-4 w-4 rounded-full bg-[#C2F800]/40 animate-bounce" />

            <div className="pointer-events-none absolute bottom-[20%] right-[10%] h-3 w-3 rounded-full bg-[#C2F800]/30 animate-ping" />

            <div className="relative z-10 w-full max-w-2xl text-center">

                {/* 404 */}
                <div className="group relative inline-block">

                    <span className="absolute inset-0 scale-75 rounded-full bg-[#C2F800]/10 blur-2xl transition duration-500 group-hover:scale-100 group-hover:bg-[#C2F800]/20" />

                    <h1 className="relative select-none font-Oswald text-[100px] font-black leading-none tracking-tight text-[#C2F800] transition duration-500 group-hover:scale-105 sm:text-[150px] md:text-[190px]">
                        404
                    </h1>
                </div>

                {/* Content */}
                <div className="mt-6 animate-[fadeIn_0.8s_ease-out] sm:mt-8">

                    <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-[#C2F800]/20 bg-[#1A2312] px-4 py-2 text-xs font-semibold text-[#C2F800] sm:text-sm">
                        <FiRefreshCw className="animate-spin" />
                        <span>PAGE NOT FOUND</span>
                    </div>

                    <h2 className="font-Oswald text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                        Looks like you lost your way
                    </h2>

                    <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#9CA3AF] sm:text-base">
                        The page you are looking for doesn't exist or may have
                        been moved to another location.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

                        {/* Back */}
                        <button
                            onClick={handleBack}
                            className="group flex w-full items-center justify-center gap-2 rounded-full border border-[#2A2E36] bg-[#15171C] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]/40 hover:bg-[#1A2312] hover:text-[#C2F800] hover:shadow-[0_0_25px_rgba(194,248,0,0.12)] sm:w-auto"
                        >
                            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                            Go Back
                        </button>

                        {/* Home */}
                        <Link
                            href="/"
                            className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-[#0C0D10] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#d4ff45] hover:shadow-[0_0_30px_rgba(194,248,0,0.25)] sm:w-auto"
                        >
                            <FiHome className="transition-transform duration-300 group-hover:scale-110" />
                            Go Home
                        </Link>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default NotFound

