"use client"

import Image from "next/image"

import Todayaddbutton from "./Todayaddbutton"
import Savebutton from "./Savebutton"

interface SingleType {
  singledata: SingleTypeData
}

const SingleCard = ({ singledata }: SingleType) => {
  return (
    <div className="my-12 container mx-auto bg-[#0C0D10] flex gap-14 px-4 sm:px-6 lg:px-0 max-lg:flex-col max-lg:gap-10">

      {/* ================= IMAGE ================= */}
      <div className="w-1/2 max-lg:w-full animate-[fadeInUp_0.5s_ease-out_both]">
        <Image
          src={singledata.image}
          width={588}
          height={735}
          alt={singledata.name}
          priority
          className="rounded-2xl w-full h-full object-cover max-lg:h-auto max-lg:max-h-[650px] transition-transform duration-500 hover:scale-[1.01]"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="w-1/2 max-lg:w-full animate-[fadeInUp_0.7s_ease-out_both]">

        {/* Title */}
        <h2 className="text-[36px] font-Oswald font-bold text-white mb-3 max-md:text-[28px] max-sm:text-[25px]">
          {singledata.name.toUpperCase()}
        </h2>

        {/* Description */}
        <p className="text-[#9CA3AF] text-[16px] font-Inter w-3/4 mb-5 max-lg:w-full max-sm:text-sm">
          {singledata.description}
        </p>

        {/* ================= MUSCLE GROUPS ================= */}
        <div className="flex items-center gap-2 mb-7 flex-wrap">
          {singledata.muscleGroups.map((item, index) => {
            return (
              <div key={index}>
                <p className="text-[#000000] font-Inter font-bold text-[12px] bg-[#C2F800] py-0.5 px-2.5 rounded-full transition-transform duration-300 hover:scale-105">
                  {item.toUpperCase()}
                </p>
              </div>
            )
          })}
        </div>

        {/* ================= TABLE ================= */}
        <div className="bg-[#151922] border border-[#232834] rounded-2xl overflow-hidden animate-[fadeInUp_0.9s_ease-out_both]">

          {/* Equipment */}
          <div className="flex items-center justify-between text-[#9CA3AF] font-Inter font-bold border-b border-[#1E2330] px-6 py-4 max-sm:px-4">
            <h3 className="text-[12px]">
              EQUIPMENT
            </h3>

            <p className="text-[#E5E7EB] text-sm font-medium text-right">
              {singledata.equipment}
            </p>
          </div>

          {/* Difficulty */}
          <div className="flex items-center justify-between text-[#9CA3AF] font-Inter font-bold border-b border-[#1E2330] px-6 py-4 max-sm:px-4">
            <h3 className="text-[12px]">
              DIFFICULTY
            </h3>

            <p className="text-[#E5E7EB] text-sm font-medium text-right">
              {singledata.difficulty}
            </p>
          </div>

          {/* Sets */}
          <div className="flex items-center justify-between text-[#9CA3AF] font-Inter font-bold border-b border-[#1E2330] px-6 py-4 max-sm:px-4">
            <h3 className="text-[12px]">
              SETS
            </h3>

            <p className="text-[#E5E7EB] text-sm font-medium text-right">
              {singledata.sets}
            </p>
          </div>

          {/* Reps */}
          <div className="flex items-center justify-between text-[#9CA3AF] font-Inter font-bold border-b border-[#1E2330] px-6 py-4 max-sm:px-4">
            <h3 className="text-[12px]">
              REPS
            </h3>

            <p className="text-[#E5E7EB] text-sm font-medium text-right">
              {singledata.reps}
            </p>
          </div>

          {/* Duration */}
          <div className="flex items-center justify-between text-[#9CA3AF] font-Inter font-bold border-b border-[#1E2330] px-6 py-4 max-sm:px-4">
            <h3 className="text-[12px]">
              DURATION
            </h3>

            <p className="text-[#E5E7EB] text-sm font-medium text-right">
              {singledata.duration} min
            </p>
          </div>

          {/* Calories */}
          <div className="flex items-center justify-between text-[#9CA3AF] font-Inter font-bold border-b border-[#1E2330] px-6 py-4 max-sm:px-4">
            <h3 className="text-[12px]">
              CALORIES
            </h3>

            <p className="text-[#E5E7EB] text-sm font-medium text-right">
              {singledata.caloriesBurned} kcal
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-between text-[#9CA3AF] font-Inter font-bold px-6 py-4 max-sm:px-4">
            <h3 className="text-[12px]">
              RATING
            </h3>

            <p className="text-[#E5E7EB] text-sm font-medium text-right">
              {singledata.rating}
            </p>
          </div>

        </div>

        {/* ================= INSTRUCTIONS ================= */}
        <h3 className="text-white font-extrabold text-[16px] mt-4 font-Inter mb-4">
          INSTRUCTIONS
        </h3>

        <div>
          {singledata.instructions.map((item, index) => {
            return (
              <ul key={index}>
                <li className="text-[#D1D5DB] font-Inter text-sm mb-3">
                  <span className="mr-2">
                    {index + 1}.
                  </span>

                  {item}
                </li>
              </ul>
            )
          })}
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="mt-9 flex items-center gap-4 max-sm:flex-col max-sm:items-stretch max-sm:w-full">
          <Todayaddbutton singledata={singledata} />
          <Savebutton singledata={singledata} />
        </div>

      </div>
    </div>
  )
}

export default SingleCard