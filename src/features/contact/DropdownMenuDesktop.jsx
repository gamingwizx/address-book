import DropdownMenu from "../../components/DropdownMenu"
import DropdownMenuDeleteOption from "./DropdownMenuDeleteOption"
import DropdownMenuUpdateOption from "./DropdownMenuUpdateOption"

export default function DropdownMenuDesktop({name, contactInfo}) {
    return (
        <DropdownMenu id={name}>
            <DropdownMenu.Open id={name} name={name.toString()}/>
            <DropdownMenu.Window name={name.toString()}>
                <DropdownMenuUpdateOption contactInfo={contactInfo}/>
                <DropdownMenuDeleteOption contactInfo={contactInfo}/>
            </DropdownMenu.Window>
        </DropdownMenu>
    )
}