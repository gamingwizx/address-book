import { createContext, useContext, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useDropdownMenuOpeningContext } from "../context/DropdownMenuOpeningContext";

const DROP_DOWN_MENU_WIDTH = "10"
const StyledDropdownMenu = styled.ul`
    background-color: white;
    width: ${DROP_DOWN_MENU_WIDTH}rem;
    position: absolute;
    left: ${(props) => props.x}px;
    top: ${(props) => props.y}px;
    display: flex;
    flex-direction: column;
    background-color: yellow;
    padding-left: 0;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);

`
const StyledDropdownOption = styled.li`
    background-color: white;
    color: black;
    list-style-type: none;
    font-weight: bold;
    font-size: 1em;
    width: 100%;
    padding: var(--spacing);
    display: flex;
    align-items: center;
    gap: var(--spacing);
`
const StyledButton = styled.button`
    display: flex;
    background: none;
    background-position: center center;
    background-image: url('/dropdown.svg');
    background-size: 0.5rem;
    background-repeat: no-repeat;
    border: none;
    width: 100%;
    height: 3rem;
`
const StyledOptionLabel = styled.label`
    color: ${(props) => props.color};
`

const DropdownMenuContext = createContext()
function DropdownMenu({children}) {
    const [openName, setOpenName] = useState("")
    const [position, setPosition] = useState({x: 0, y: 0})
    const open = setOpenName
    const close = () => setOpenName(() => "")

    return (
        <DropdownMenuContext.Provider value={{openName, open, close, setPosition, position}}>
            {children}
        </DropdownMenuContext.Provider>
    )
}
function Open({name, id}) {

    const {open, setPosition} = useContext(DropdownMenuContext)
    const {openDropdownList} = useDropdownMenuOpeningContext()
    useEffect(() => {
        openDropdownList(id)
    }, [])

    const handleOpen = (e) => {
        const rect = e.target.closest("button").getBoundingClientRect()
        const x = rect.left - 16 * DROP_DOWN_MENU_WIDTH
        const y = rect.y
        setPosition(() => { return {x,y}})
        open(() => name)
    }
    
    return (
        <StyledButton onClick={handleOpen}></StyledButton>
    )
}

function Window({children, name}) {


    const {openName, position} = useContext(DropdownMenuContext)
    if (openName !== name) return null

    return createPortal(
        <StyledDropdownMenu id="dropdown-menu" x={position.x} y={position.y}>
            {children}
        </StyledDropdownMenu>, 
        document.body
    )
}

DropdownMenu.Open = Open
DropdownMenu.Window = Window

export default DropdownMenu