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
    sort,
    setsort,
    savesort,
    setsavesort,
  } = useContext(ThemeContext) as {
    todayplan: SingleTypeData[]
    save: SingleTypeData[]
    sort: SingleTypeData[]
    setsort: Dispatch<SetStateAction<SingleTypeData[]>>
    savesort: SingleTypeData[]
    setsavesort: Dispatch<SetStateAction<SingleTypeData[]>>
  }

  // sort start

  const handlesort = (
    value: "Duration" | "Calories" | "Rating"
  ) => {
    const newdata = [...todayplan]
    const savedata = [...save]

    if (value === "Duration") {
      newdata.sort(
        (a, b) => a.duration - b.duration
      )

      savedata.sort(
        (a, b) => a.duration - b.duration
      )
    }

    if (value === "Calories") {
      newdata.sort(
        (a, b) => a.caloriesBurned - b.caloriesBurned
      )

      savedata.sort(
        (a, b) => a.caloriesBurned - b.caloriesBurned
      )
    }

    if (value === "Rating") {
      newdata.sort(
        (a, b) => a.rating - b.rating
      )

      savedata.sort(
        (a, b) => a.rating - b.rating
      )
    }

    setsort(newdata)
    setsavesort(savedata)
  }

  // default Duration sort

  useEffect(() => {
    const sortedData = [...todayplan].sort(
      (a, b) => a.duration - b.duration
    )

    const sortedSaveData = [...save].sort(
      (a, b) => a.duration - b.duration
    )

    setsort(sortedData)
    setsavesort(sortedSaveData)
  }, [todayplan, save])

  // sort end

  const handleclick = (
    value: "Today" | "Saved"
  ) => {
    setclick(value)
  }

  const exercises = () => {
    if (click === "Today") {
      return todayplan.length
    } else {
      return save.length
    }
  }

  const minutes = () => {
    if (click === "Today") {
      const newtime = todayplan.reduce(
        (total, item) => total + item.duration,
        0
      )

      return newtime
    } else {
      const newtime = save.reduce(
        (total, item) => total + item.duration,
        0
      )

      return newtime
    }
  }

  const calories = () => {
    if (click === "Today") {
      const newcalories = todayplan.reduce(
        (total, item) => total + item.caloriesBurned,
        0
      )

      return newcalories
    } else {
      const newcalories = save.reduce(
        (total, item) => total + item.caloriesBurned,
        0
      )

      return newcalories
    }
  }

  return (
    <div className="bg-[#0C0D10]">
      <div className="container mx-auto my-10">

        <h2 className="text-white font-Oswald text-3xl font-bold mb-2">
          MY PLAN
        </h2>

        <p className="text-sm text-[#8A92A0] mb-6">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <div className="bg-[#13161D] py-13 px-6 grid grid-cols-3 gap-8 border border-[#232732] rounded-2xl">

          {/* div1 */}
          <div className="flex flex-col border-r border-[#232732]">
            <h3 className="text-[#8A92A0] text-sm">
              Exercises
            </h3>

            <h4 className="text-[#CCFF00] font-bold text-4xl">
              {exercises()}
            </h4>
          </div>

          {/* div2 */}
          <div className="flex flex-col border-r border-[#232732]">
            <h3 className="text-[#8A92A0] text-sm">
              Minutes
            </h3>

            <h4 className="text-white font-bold text-4xl">
              {minutes()}
            </h4>
          </div>

          {/* div3 */}
          <div className="flex flex-col">
            <h3 className="text-[#8A92A0] text-sm">
              Calories
            </h3>

            <h4 className="text-white font-bold text-4xl">
              {calories()}
            </h4>
          </div>

        </div>

        <div className="flex items-center justify-between my-6">

          {/* Tabs */}
          <div className="tabs tabs-box bg-[#151921] p-1 rounded-xl border border-[#232834] w-fit">

            <input
              onClick={() => handleclick("Today")}
              type="radio"
              name="plan"
              className="tab rounded-lg px-4 py-1.5 text-[12px] font-medium font-Inter text-[#9CA3AF] checked:bg-[#1F242D] checked:text-white checked:font-bold"
              aria-label="Today’s Plan"
              defaultChecked
            />

            <input
              onClick={() => handleclick("Saved")}
              type="radio"
              name="plan"
              className="tab rounded-lg px-4 py-1.5 text-[12px] font-medium font-Inter text-[#9CA3AF] checked:bg-[#1F242D] checked:text-white checked:font-bold"
              aria-label="Saved"
            />

          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">

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
              className="select w-35 h-9.5 min-h-0 bg-[#13161D] border border-none rounded-lg text-white text-[12px] font-Inter px-3 outline-none focus:outline-none focus:ring-none focus:border-none"
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

        {
          click === "Today"
            ? <Todayplancard />
            : <SaveCard />
        }

      </div>
    </div>
  )
}

export default Myplan