import Image from "next/image"
import Link from "next/link"


const Footer = () => {
    return (
        <footer className="bg-[#0C0D10] border-t border-[#1A1D24]">
            <div className="py-10 flex items-center justify-between  container mx-auto" >
                <div>
                    <Link href="/" className=" flex items-center gap-2.5 ">
                        <Image src="/assets/logo.png" width={28} height={28} alt="fitlog logo" ></Image>
                        <h3 className="font-Oswald font-black text-white text-xl">FITLOG</h3>
                    </Link>
                </div>
                <div>
                    <p className="text-[#6B7280] font-Inter text-sm font-normal">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer