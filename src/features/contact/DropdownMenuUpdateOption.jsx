import Modal from "../../ui/Modal"
import StyledDropdownOption from "./components/DropdownOption"
import StyledOptionLabel from "./components/DropdownOptionLabel"
import Img from "../../ui/Img"

import UpdateContact from "./UpdateContact"

export default function DropdownMenuUpdateOption({contactInfo}) {
    return (
        <Modal>
            <Modal.Open>
                <StyledDropdownOption name="update">
                    <Img size="small" src="/update-icon.svg"/>
                    <StyledOptionLabel color="black">Update</StyledOptionLabel>
                </StyledDropdownOption>
            </Modal.Open>
            <Modal.Window title="Update Contact">
                <UpdateContact contactInfo={contactInfo}/>
            </Modal.Window>
        </Modal>
    )
}