"use client"
import { ThemeContext } from "@/app/theme-provider.tsx/page";
import { Dispatch, SetStateAction, useContext } from "react";
import { FiBookmark } from "react-icons/fi"
import { toast } from "react-toastify";
interface TodayplanType {
    singledata: SingleTypeData;

}

const Savebutton = ({ singledata }: TodayplanType) => {
    const { save, setsave } = useContext(ThemeContext) as {
        save: SingleTypeData[];
        setsave: Dispatch<SetStateAction<SingleTypeData[]>>;
    }
    const alreadysave = save.some(item => item.id === singledata.id);
    const handlebutton = () => {
        if (alreadysave) {
            toast.error(`${singledata.name} already save!`);
            return;
        }
        setsave([...save, singledata])
        toast.success(`Save to ${singledata.name}`)
    }
   

    return (
        <button onClick={handlebutton} className="cursor-pointer flex items-center gap-2 text-[#E5E7EB] px-6 py-3 border border-[#374151] rounded-xl font-semibold "><FiBookmark />Save for later</button>
    )
}

export default Savebutton