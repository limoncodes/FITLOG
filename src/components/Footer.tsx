import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-[#0C0D10] border-t border-[#1A1D24]">
            <div className="py-10 flex items-center justify-between container mx-auto
                            px-4 sm:px-6 lg:px-0
                            max-md:flex-col max-md:gap-5 max-md:text-center">

                {/* Logo */}
                <div>
                    <Link
                        href="/"
                        className="flex items-center gap-2.5 transition-transform duration-300 hover:scale-105"
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
                </div>

                {/* Copyright */}
                <div>
                    <p className="text-[#6B7280] font-Inter text-sm font-normal
                                  max-sm:text-xs">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer