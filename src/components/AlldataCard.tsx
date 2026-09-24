import { AlldataType } from "@/alldataType"
import Image from "next/image"
import { FaFire, FaRegStar } from "react-icons/fa"
import { TbClockHour4Filled } from "react-icons/tb"


interface DataType {
  alldadta: AlldataType
}

const AlldataCard = ({ alldadta }: DataType) => {

  console.log(alldadta)
  return (
    <div className="bg-[#15171D] rounded-2xl">
      <Image src={alldadta.image} height={200} width={500} alt={alldadta.name} className="h-60 w-full object-cover rounded-tr-2xl rounded-tl-2xl "></Image>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {
            alldadta.muscleGroups.map((item, index) => {
              return (
                <div key={index}>
                  <p className="text-[#000000] font-Inter font-bold text-[12px] bg-[#C2F800] py-0.5 px-2.5 rounded-full">{item.toUpperCase()}</p>

                </div>
              )
            })
          }
        </div>
        <h2 className="text-white font-Oswald font-bold mb-1 text-lg">{alldadta.name.toUpperCase()}</h2>
        <p className="text-[#9CA3AF] font-Inter text-[12px]">{alldadta.equipment}</p>
        <hr className="my-4 text-[#20242E]" />
        {/* main div */}
        <div className="flex items-center gap-6">
          {/* div1 */}
          <div>
            <h3 className="text-[#9CA3AF] font-Inter  flex items-center gap-2 text-sm "><TbClockHour4Filled />{alldadta.duration}</h3>
          </div>
          {/* div2 */}
          <div>
            <h3 className="text-[#9CA3AF] font-Inter  flex items-center gap-2 text-sm "><FaFire />{alldadta.caloriesBurned}</h3>

          </div>
          {/* div3 */}
          <div>
            <h3 className="text-[#9CA3AF] font-Inter  flex items-center gap-2 text-sm "><FaRegStar />{alldadta.rating}</h3>
          </div>


        </div>
      </div>



    </div>
  )
}

export default AlldataCard