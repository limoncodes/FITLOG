import SingleCard from "@/components/SingleCard"
import { notFound } from "next/navigation"

interface Pramstype {
    params: Promise<{ id: string }>
}

const Detailapage = async ({ params }: Pramstype) => {
    const { id } = await params
    const iddata = parseInt(id)

    const getsingledata = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${iddata}`
    )

    if (!getsingledata.ok) {
        notFound()
    }

    const singledata = await getsingledata.json()

    if (!singledata) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-[#0C0D10]">
            <SingleCard singledata={singledata} />
        </div>
    )
}

export default Detailapage