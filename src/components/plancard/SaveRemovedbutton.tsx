"use client"

import { ThemeContext } from "@/app/theme-provider.tsx/page"
import Link from "next/link"
import { Dispatch, SetStateAction, useContext } from "react"
import { IoMdClose } from "react-icons/io"
import { toast } from "react-toastify"

const SaveRemovedbutton = ({ item }: { item: SingleTypeData }) => {
    const { save, setsave } = useContext(ThemeContext) as {
        save: SingleTypeData[];
        setsave: Dispatch<SetStateAction<SingleTypeData[]>>;
    }
    const handleRemoved = (value: number) => {
        const newdata = save.filter(item => item.id !== value)
        setsave(newdata)
        toast.warn(`${item.name} Removed`)

    }


    return (
        <div className="flex items-center gap-2">
            <Link href={`/workouts/${item.id}`}>
                <button className="rounded-full border border-[#303746] px-5 py-2.5 text-sm text-white hover:bg-[#20242d] cursor-pointer">
                    View Details
                </button>
            </Link>




            <button onClick={()=>handleRemoved(item.id)} className="ml-2">
                <IoMdClose className="text-xl text-gray-500 hover:text-white" />
            </button>
        </div>
    )
}

export default SaveRemovedbutton