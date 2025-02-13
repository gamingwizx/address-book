import { createContext, useContext, useState } from "react";

const DropdownMobileContext = createContext()
function DropdownMobileContextProvider({children}) {
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
        <DropdownMobileContext.Provider value={{openDropdownList, closeDropdownList, activeDropdown, onHover}}>
            {children}
        </DropdownMobileContext.Provider>
    )
}

export function useDropdownMobileContext() {
    const context = useContext(DropdownMobileContext)
    if (!context) throw new Error("Value is used outside of DropdownMobileContext")
    return context
}

export default DropdownMobileContextProvider