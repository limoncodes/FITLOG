"use client"
import { ThemeContext } from "@/app/theme-provider.tsx/page"
import Link from "next/link"
import { Dispatch, SetStateAction, useContext } from "react"
import { FaCheck } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import { toast } from "react-toastify"


const TodayRemovebutton = ({ item }: { item: SingleTypeData }) => {
    const { todayplan, setrodayplan, sort, setsort } = useContext(ThemeContext) as {
        todayplan: SingleTypeData[];
        setrodayplan: Dispatch<SetStateAction<SingleTypeData[]>>;
        sort: SingleTypeData[];
        setsort: Dispatch<SetStateAction<SingleTypeData[]>>;
    }
    const handlecomplied = (value: number) => {
        
        const newdata = sort.filter(item => item.id !== value);
        setsort(newdata);

      
        const newTodayPlan = todayplan.filter(item => item.id !== value);
        setrodayplan(newTodayPlan);

        toast.success(`${item.name} Completed`);

    }
    const handleRemoved = (value: number) => {
        const newdata = sort.filter(item => item.id !== value)
        setsort(newdata)
        const newTodayplan = todayplan.filter(item=> item.id !== value)
        setrodayplan(newTodayplan );
        toast.warn(`${item.name} Removed`);

    }
    return (
        <div className="flex items-center gap-3">
            <Link href={`/workouts/${item.id}`}>
                <button className="rounded-full border border-[#303746] px-5 py-2.5 text-sm text-white hover:bg-[#20242d] cursor-pointer">
                    View Details
                </button>
            </Link>


            <button onClick={() => handlecomplied(item.id)} className="flex items-center gap-2 rounded-full bg-[#baff00] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#a9eb00] cursor-pointer">
                <FaCheck size={11} />
                Mark as Done
            </button>

            <button onClick={() => handleRemoved(item.id)} className="ml-2">
                <IoMdClose className="text-xl text-gray-500 hover:text-white" />
            </button>
        </div>
    )
}

export default TodayRemovebutton