import Image from "next/image"

const Hero = () => {
    return (
        <div className="container mx-auto bg-[#222630] px-14 py-17.5 flex items-center justify-between mt-12 rounded-2xl
                        max-md:flex-col max-md:items-start max-md:px-6 max-md:py-10 max-md:gap-10
                        sm:max-md:px-8">

            {/* div1 */}
            <div className="max-md:w-full">

                <h3 className="font-Inter text-[#C2F800] font-bold text-sm mb-5
                               animate-[fadeInUp_0.6s_ease-out]">
                    WORKOUT LIBRARY
                </h3>

                <h1 className="font-Oswald text-white font-extrabold text-[53px] mb-5
                               max-lg:text-[45px] max-md:text-[38px] max-sm:text-[32px]
                               leading-tight
                               animate-[fadeInUp_0.8s_ease-out]">
                    TRAIN WITH INTENT. LOG <br className="max-md:hidden" />
                    EVERY SET.
                </h1>

                <p className="text-[#9CA3AF] text-[16px] font-Inter mb-5
                              max-md:text-[15px] max-sm:text-sm
                              max-w-full
                              animate-[fadeInUp_1s_ease-out]">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br className="max-md:hidden" />
                    into today's plan, and watch the week's work add up.
                </p>

                <button className="text-black font-Inter text-sm font-bold bg-[#C2F800] py-3 px-6 rounded-md
                                   transition-all duration-300
                                   hover:scale-105
                                   active:scale-95
                                   max-sm:w-full
                                   animate-[fadeInUp_1.2s_ease-out]">
                    BROWSE WORKOUTS
                </button>

            </div>

            {/* div2 */}
            <div className="max-md:w-full max-md:flex max-md:justify-center
                            animate-[fadeInRight_0.9s_ease-out]">

                <Image
                    src="/assets/banner.png"
                    width={334}
                    height={334}
                    alt="baner image"
                    className="transition-transform duration-500 hover:scale-105
                               max-lg:w-[280px] max-lg:h-[280px]
                               max-md:w-[250px] max-md:h-[250px]
                               max-sm:w-[220px] max-sm:h-[220px]"
                />

            </div>

        </div>
    )
}

export default Hero