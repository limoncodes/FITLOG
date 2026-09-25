import SingleCard from "@/components/SingleCard"

interface Pramstype {
  params: Promise<{ id: string }>
}
const Detailapage = async ({params}:Pramstype) => {
    const {id} = await params
    const iddata = parseInt(id)
    const getsingledata = await fetch(`https://api.abcz.workers.dev/api/fitlog/${iddata}`)
    const singledata = await getsingledata.json()
    
  return (
    <div className="bg-[#0C0D10]">
        <SingleCard singledata={singledata} />
    </div>
  )
}

export default Detailapage