import { createContext, useContext, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { toggleDropdown } from "../features/contact/redux/UiSlice";
import { useDispatch, useSelector } from "react-redux";
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

    const {setPosition} = useContext(DropdownMenuContext)
    const dispatch = useDispatch()

    const handleOpen = (e) => {
        const rect = e.target.closest("button").getBoundingClientRect()
        const x = rect.left - 16 * DROP_DOWN_MENU_WIDTH
        const y = rect.y
        setPosition(() => { return {x,y}})
        dispatch(toggleDropdown(name))
    }
    
    return (
        <StyledButton onClick={handleOpen}></StyledButton>
    )
}

function Window({children, name}) {


    const {position} = useContext(DropdownMenuContext)
    const dropdownOpen = useSelector((store) => store.ui.dropdownOpen)

    if (dropdownOpen !== name) return null
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