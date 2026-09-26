"use client"

import { createContext, useState } from "react"

export const ThemeContext= createContext({})
const ThemeProvider = ({children}:{children:React.ReactNode}) => {
    const [todayplan,setrodayplan]= useState([])
    const [save,setsave]= useState([])
    const [sort,setsort]= useState([])
    const [savesort,setsavesort]= useState([])
    const fitloguse = {
        todayplan,setrodayplan,
        save,setsave,
        sort,setsort,
        savesort,setsavesort

    }

  return (
     <ThemeContext.Provider value={fitloguse}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider