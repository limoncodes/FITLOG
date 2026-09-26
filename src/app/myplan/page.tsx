"use client"

import Todayplancard from "@/components/plancard/Todayplancard"
import SaveCard from "@/components/plancard/SaveCard"
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react"
import { ThemeContext } from "../theme-provider.tsx/page"

const Myplan = () => {
  const [click, setclick] = useState<"Today" | "Saved">("Today")

  const {
    todayplan,
    save,
    setsort,
    setsavesort,
  } = useContext(ThemeContext) as {
    todayplan: SingleTypeData[]
    save: SingleTypeData[]
    sort: SingleTypeData[]
    setsort: Dispatch<SetStateAction<SingleTypeData[]>>
    savesort: SingleTypeData[]
    setsavesort: Dispatch<SetStateAction<SingleTypeData[]>>
  }

  const handlesort = (
    value: "Duration" | "Calories" | "Rating"
  ) => {
    const newdata = [...todayplan]
    const savedata = [...save]

    if (value === "Duration") {
      newdata.sort((a, b) => a.duration - b.duration)
      savedata.sort((a, b) => a.duration - b.duration)
    }

    if (value === "Calories") {
      newdata.sort((a, b) => a.caloriesBurned - b.caloriesBurned)
      savedata.sort((a, b) => a.caloriesBurned - b.caloriesBurned)
    }

    if (value === "Rating") {
      newdata.sort((a, b) => a.rating - b.rating)
      savedata.sort((a, b) => a.rating - b.rating)
    }

    setsort(newdata)
    setsavesort(savedata)
  }

  useEffect(() => {
    const sortedData = [...todayplan].sort(
      (a, b) => a.duration - b.duration
    )

    const sortedSaveData = [...save].sort(
      (a, b) => a.duration - b.duration
    )

    setsort(sortedData)
    setsavesort(sortedSaveData)
  }, [todayplan, save, setsort, setsavesort])

  const handleclick = (value: "Today" | "Saved") => {
    setclick(value)
  }

  const exercises = () => {
    if (click === "Today") {
      return todayplan.length
    }

    return save.length
  }

  const minutes = () => {
    if (click === "Today") {
      return todayplan.reduce(
        (total, item) => total + item.duration,
        0
      )
    }

    return save.reduce(
      (total, item) => total + item.duration,
      0
    )
  }

  const calories = () => {
    if (click === "Today") {
      return todayplan.reduce(
        (total, item) => total + item.caloriesBurned,
        0
      )
    }

    return save.reduce(
      (total, item) => total + item.caloriesBurned,
      0
    )
  }

  return (
    <div className="bg-[#0C0D10] min-h-screen">
      <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-0">

        {/* Heading */}
        <div className="animate-[fadeInUp_0.5s_ease-out_both]">
          <h2 className="text-white font-Oswald text-3xl font-bold mb-2 max-sm:text-2xl">
            MY PLAN
          </h2>

          <p className="text-sm text-[#8A92A0] mb-6 max-sm:text-xs">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats */}
        <div className="bg-[#13161D] py-13 px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 border border-[#232732] rounded-2xl animate-[fadeInUp_0.7s_ease-out_both] transition-all duration-300 hover:shadow-lg max-sm:py-7 max-sm:px-5 max-sm:gap-5">

          {/* Exercises */}
          <div className="flex flex-col border-r border-[#232732] max-sm:border-r-0 max-sm:border-b max-sm:pb-5">
            <h3 className="text-[#8A92A0] text-sm">
              Exercises
            </h3>

            <h4 className="text-[#CCFF00] font-bold text-4xl max-sm:text-3xl">
              {exercises()}
            </h4>
          </div>

          {/* Minutes */}
          <div className="flex flex-col border-r border-[#232732] max-sm:border-r-0 max-sm:border-b max-sm:pb-5">
            <h3 className="text-[#8A92A0] text-sm">
              Minutes
            </h3>

            <h4 className="text-white font-bold text-4xl max-sm:text-3xl">
              {minutes()}
            </h4>
          </div>

          {/* Calories */}
          <div className="flex flex-col">
            <h3 className="text-[#8A92A0] text-sm">
              Calories
            </h3>

            <h4 className="text-white font-bold text-4xl max-sm:text-3xl">
              {calories()}
            </h4>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="flex items-center justify-between my-6 animate-[fadeInUp_0.9s_ease-out_both] max-sm:flex-col max-sm:items-stretch max-sm:gap-4">

          {/* Tabs */}
          <div className="tabs tabs-box bg-[#151921] p-1 rounded-xl border border-[#232834] w-fit max-sm:w-full">

            <input
              onClick={() => handleclick("Today")}
              type="radio"
              name="plan"
              className="tab rounded-lg px-4 py-1.5 text-[12px] font-medium font-Inter text-[#9CA3AF] checked:bg-[#1F242D] checked:text-white checked:font-bold transition-all duration-300 max-sm:flex-1"
              aria-label="Today’s Plan"
              defaultChecked
            />

            <input
              onClick={() => handleclick("Saved")}
              type="radio"
              name="plan"
              className="tab rounded-lg px-4 py-1.5 text-[12px] font-medium font-Inter text-[#9CA3AF] checked:bg-[#1F242D] checked:text-white checked:font-bold transition-all duration-300 max-sm:flex-1"
              aria-label="Saved"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3 max-sm:justify-between">

            <p className="text-[#8A92A0] font-Inter text-[12px]">
              Sort By
            </p>

            <select
              onChange={(e) =>
                handlesort(
                  e.target.value as
                    | "Duration"
                    | "Calories"
                    | "Rating"
                )
              }
              className="select w-35 h-9.5 min-h-0 bg-[#13161D] border border-none rounded-lg text-white text-[12px] font-Inter px-3 outline-none focus:outline-none focus:ring-none focus:border-none transition-all duration-300 max-sm:flex-1"
            >
              <option value="Duration">
                Duration
              </option>

              <option value="Calories">
                Calories
              </option>

              <option value="Rating">
                Rating
              </option>
            </select>
          </div>
        </div>

        {/* Cards */}
        <div className="animate-[fadeInUp_1s_ease-out_both] w-full overflow-hidden">
          {click === "Today" ? (
            <Todayplancard />
          ) : (
            <SaveCard />
          )}
        </div>

      </div>
    </div>
  )
}

export default Myplan