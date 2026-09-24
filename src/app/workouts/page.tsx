
import { AlldataType } from "@/alldataType"
import AlldataCard from "@/components/AlldataCard"

const getfitlogalldata = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
  const data = res.json()
  return data
}
const Workout = async () => {
  const alldata = await getfitlogalldata()



  return (
    <section className="bg-[#0C0D10]">
      <div className="container mx-auto my-16 ">
        <h2 className="text-white font-bold font-Oswald text-3xl">THE LIBRARY</h2>
        <p className="text-[#9CA3AF] font-Inter text-sm mb-8 ">Twelve lifts covering every major muscle group.</p>
        <div className="grid grid-cols-3 gap-6 " >
          {
            alldata.length > 0 ? alldata.map((alldadta: AlldataType) => <AlldataCard key={alldadta.id} alldadta={alldadta} />) : <p className="text-2xl text-center text-white
             font-Oswald">NOTHING HERE YET</p>


          }




        </div>



      </div>
    </section>
  )
}

export default Workout