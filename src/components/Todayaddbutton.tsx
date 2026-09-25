"use client"

import { ThemeContext } from "@/app/theme-provider.tsx/page"
import { Dispatch, SetStateAction, useContext } from "react"
import { MdDateRange } from "react-icons/md"
import { toast } from "react-toastify";
interface TodayplanType {
    singledata: SingleTypeData;

}

const Todayaddbutton = ({ singledata }: TodayplanType) => {

    const { todayplan, setrodayplan } = useContext(ThemeContext) as {
        todayplan: SingleTypeData[];
        setrodayplan: Dispatch<SetStateAction<SingleTypeData[]>>;
    }
    const alreadyadded = todayplan.some(item => item.id === singledata.id);


    const handletodday = () => {
        if (alreadyadded) {
            toast.error(`${singledata.name} already added!`);
            return;
        }
        setrodayplan([...todayplan, singledata])
        toast.success(`Added to ${singledata.name}`)
    }




    return (
        <button onClick={handletodday} className=" cursor-pointer flex items-center gap-2 text-[#0F1115] px-6 py-3 bg-[#CCFF00] rounded-xl font-semibold"><MdDateRange /> Add to today's plan</button>
    )
}

export default Todayaddbutton