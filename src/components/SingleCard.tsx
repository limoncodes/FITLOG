import Image from "next/image"


import Todayaddbutton from "./Todayaddbutton"
import Savebutton from "./Savebutton"

interface SingleType {
  singledata: SingleTypeData
}

const SingleCard = ({ singledata }: SingleType) => {
  return (

    <div className="my-12  container mx-auto bg-[#0C0D10] flex  gap-14">
      {/* images */}
      <div className="w-1/2 ">
        <Image src={singledata.image} width={588} height={735} alt={singledata.name} priority className="rounded-2xl w-full h-full object-cover"></Image>
      </div>
      {/* text  */}
      <div className="w-1/2">
        <h2 className="text-[36px} font-Oswald font-bold text-white mb-3">{singledata.name.toUpperCase()}</h2>
        <p className="text-[#9CA3AF] text-[16px] font-Inter w-3/4 mb-5">{singledata.description}</p>
        <div className="flex items-center gap-2 mb-7">
          {
            singledata.muscleGroups.map((item, index) => {
              return (
                <div key={index}>
                  <p className="text-[#000000] font-Inter font-bold text-[12px] bg-[#C2F800] py-0.5 px-2.5 rounded-full">{item.toUpperCase()}</p>

                </div>
              )
            })
          }
        </div>
        {/* table */}
        <div className="bg-[#151922] border border-[#232834] rounded-2xl">

          {/* div1 */}
          <div className="flex items-center justify-between text-[#9CA3AF] font-Inter font-bold  border-b border-[#1E2330] px-6 py-4">
            <h3 className="text-[12px]" >EQUIPMENT</h3>
            <p className="text-[#E5E7EB] text-sm font-medium">{singledata.equipment}</p>

          </div>
          {/* div2 */}
          <div className="flex items-center justify-between text-[#9CA3AF] font-Inter font-bold border-b border-[#1E2330] px-6 py-4">
            <h3 className="text-[12px]" >DIFFICULTY</h3>
            <p className="text-[#E5E7EB] text-sm font-medium">{singledata.difficulty}</p>

          </div>
          {/* div3 */}
          <div className="flex items-center justify-between text-[#9CA3AF] font-Inter font-bold  border-b border-[#1E2330] px-6 py-4">
            <h3 className="text-[12px]" >SETS</h3>
            <p className="text-[#E5E7EB] text-sm font-medium">{singledata.sets}</p>

          </div>
          {/* div4 */}
          <div className="flex items-center justify-between text-[#9CA3AF] font-Inter font-bold  border-b border-[#1E2330] px-6 py-4">
            <h3 className="text-[12px]" >REPS</h3>
            <p className="text-[#E5E7EB] text-sm font-medium">{singledata.reps}</p>

          </div>
          {/* div5 */}
          <div className="flex items-center justify-between text-[#9CA3AF] font-Inter font-bold  border-b border-[#1E2330] px-6 py-4">
            <h3 className="text-[12px]" >DURATION</h3>
            <p className="text-[#E5E7EB] text-sm font-medium">{singledata.duration} min</p>

          </div>
          {/* div6 */}
          <div className="flex items-center justify-between text-[#9CA3AF] font-Inter font-bold  border-b border-[#1E2330] px-6 py-4">
            <h3 className="text-[12px]" >CALORIES</h3>
            <p className="text-[#E5E7EB] text-sm font-medium">{singledata.caloriesBurned} kcal</p>

          </div>
          {/* div7 */}
          <div className="flex items-center justify-between text-[#9CA3AF] font-Inter font-bold  px-6 py-4">
            <h3 className="text-[12px]" >RATING</h3>
            <p className="text-[#E5E7EB] text-sm font-medium">{singledata.rating}</p>

          </div>

        </div>
        <h3 className="text-white font-extrabold text-[16px] mt-4 font-Inter mb-4">INSTRUCTIONS</h3>
        <div>
          {
            singledata.instructions.map((item,index)=>{
              return (
                <ul key={index}>
                  <li className="text-[#D1D5DB] font-Inter text-sm mb-3 "><span className="mr-2">{index+1}.</span>{item}</li>
                </ul>
              )
            })
          }
        </div>
        <div className="mt-9 flex items-center gap-4">
          <Todayaddbutton singledata={singledata} />
          <Savebutton singledata={singledata} />
        </div>




      </div>


    </div>

  )
}

export default SingleCard