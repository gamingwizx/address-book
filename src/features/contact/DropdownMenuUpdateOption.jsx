import Modal from "../../components/Modal"
import StyledDropdownOption from "../../components/DropdownOption"
import StyledOptionLabel from "../../components/DropdownOptionLabel"
import Img from "../../components/Img"

import UpdateContact from "./UpdateContact"

export default function DropdownMenuUpdateOption({contactInfo}) {
    return (
        <Modal>
            <Modal.Open name="update-contact">
                <StyledDropdownOption name="update">
                    <Img size="small" src="/update-icon.svg"/>
                    <StyledOptionLabel color="black">Update</StyledOptionLabel>
                </StyledDropdownOption>
            </Modal.Open>
            <Modal.Window title="Update Contact" name="update-contact">
                <UpdateContact contactInfo={contactInfo}/>
            </Modal.Window>
        </Modal>
    )
}