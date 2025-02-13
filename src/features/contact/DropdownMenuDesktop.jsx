import DropdownMenu from "../../ui/DropdownMenu"
import DropdownMenuDeleteOption from "./DropdownMenuDeleteOption"
import DropdownMenuUpdateOption from "./DropdownMenuUpdateOption"

export default function DropdownMenuDesktop({name, contactInfo}) {
    return (
        <DropdownMenu id={name}>
            <DropdownMenu.Open id={name} name={name}/>
            <DropdownMenu.Window name={name}>
                <DropdownMenuUpdateOption contactInfo={contactInfo}/>
                <DropdownMenuDeleteOption contactInfo={contactInfo}/>
            </DropdownMenu.Window>
        </DropdownMenu>
    )
}