import { AlldataType } from "@/alldataType"
import AlldataCard from "@/components/AlldataCard"

const getfitlogalldata = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = await res.json()
    return data
}

const Workout = async () => {
    const alldata = await getfitlogalldata()

    return (
        <section className="bg-[#0C0D10]">
            <div className="container mx-auto my-16 px-4 sm:px-6 lg:px-0">

                {/* Heading */}
                <h2 className="text-white font-bold font-Oswald text-3xl">
                    THE LIBRARY
                </h2>

                <p className="text-[#9CA3AF] font-Inter text-sm mb-8">
                    Twelve lifts covering every major muscle group.
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {alldata.length > 0 ? (
                        alldata.map(
                            (alldadta: AlldataType, index: number) => (
                                <div
                                    key={alldadta.id}
                                    className="
                                        animate-[fadeInUp_0.6s_ease-out_both]
                                        transition-all
                                        duration-300
                                        ease-out
                                        hover:-translate-y-2
                                        hover:scale-[1.02]
                                        hover:shadow-xl
                                    "
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <AlldataCard
                                        alldadta={alldadta}
                                    />
                                </div>
                            )
                        )
                    ) : (
                        <p className="text-2xl text-center text-white font-Oswald col-span-full">
                            NOTHING HERE YET
                        </p>
                    )}

                </div>
            </div>
        </section>
    )
}

export default Workout