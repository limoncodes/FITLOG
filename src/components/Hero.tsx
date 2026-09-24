import Image from "next/image"


const Hero = () => {
    return (
        <div className="container mx-auto bg-[#222630] px-14 py-17.5 flex items-center justify-between my-12 rounded-2xl">
            {/* div1 */}
            <div>
                <h3 className="font-Inter text-[#C2F800] font-bold text-sm mb-5">WORKOUT LIBRARY</h3>
                <h1 className="font-Oswald text-white font-extrabold text-[53px] mb-5">TRAIN WITH INTENT. LOG <br />
                    EVERY SET.</h1>
                <p className="text-[#9CA3AF] text-[16px] font-Inter mb-5">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                    into today's plan, and watch the week's work add up.</p>
                <button className="text-black font-Inter text-sm font-bold bg-[#C2F800] py-3 px-6 rounded-md ">BROWSE WORKOUTS</button>


            </div>
            {/* div2 */}
            <div>
                <Image src="/assets/banner.png" width={334} height={334} alt="baner image"></Image>
            </div>
        </div>
    )
}

export default Hero