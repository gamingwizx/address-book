import { Children, createContext, useContext, useState } from "react";

const DropdownMenuOpeningContext = createContext()
function DropdownMenuOpeningContextProvider({children}) {
    const [activeDropdown, setActiveDropdown] = useState("")
    const openDropdownList = (id) => {
        setActiveDropdown(id)
    }
    const onHover = (id) => {
        setActiveDropdown(id)
    }
    const closeDropdownList = () => {
        setActiveDropdown("")
    }

    return (
        <DropdownMenuOpeningContext.Provider value={{openDropdownList, closeDropdownList, activeDropdown, onHover}}>
            {children}
        </DropdownMenuOpeningContext.Provider>
    )
}

export function useDropdownMenuOpeningContext() {
    const context = useContext(DropdownMenuOpeningContext)
    if (!context) throw new Error("Value is used outside of DropdownMenuOpeningContext")
    return context
}

export default DropdownMenuOpeningContextProvider