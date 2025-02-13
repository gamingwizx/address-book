import styled from "styled-components"
import Modal from "../../components/Modal"
import Img from "../../components/Img"
import UpdateContact from "./UpdateContact"
import DeleteContact from "./DeleteContact"
import { useDispatch } from "react-redux"
import { useDropdownMobileContext } from "./context/DropdownMobileContext"
const StyledBackdrop = styled.div`
    background-color: black;
    opacity: 0.5;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 9;
    position: fixed;
`
const StyledMobilePopup = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
    height: 30%;
    z-index: 10;
    display: flex;
    flex-direction: column;
`
const StyledMobilePopupOption = styled.div`
    flex-basis: 20%;
    flex-grow: 1;
    flex: 0 1 200px;
    padding: var(--spacing);
    display: flex;
    align-items: center;
    gap: var(--spacing);
`
const StyledOptionLabel = styled.label`
    color: ${(props) => props.color};
`
export default function PopupMobile({contactInfo}) {

    const {closeDropdownList} = useDropdownMobileContext()

    return (
        <>
            <StyledBackdrop onClick={() => closeDropdownList()}/>
            <StyledMobilePopup>
                <Modal>
                    <Modal.Open name="update-mobile">
                        <StyledMobilePopupOption name="update-mobile">
                            <Img size="small" src="/update-icon.svg"/>
                            <label>Update</label>
                        </StyledMobilePopupOption>
                    </Modal.Open>
                    <Modal.Window title="Update Contact" name="update-mobile">
                        <UpdateContact contactInfo={contactInfo}/>
                    </Modal.Window>
                </Modal>
                
                <Modal>
                    <Modal.Open name="delete-mobile">
                        <StyledMobilePopupOption name="delete-mobile">
                            <Img size="small" src="/delete-icon.svg"/>
                            <StyledOptionLabel color="red">Delete</StyledOptionLabel>
                        </StyledMobilePopupOption>
                    </Modal.Open>
                    <Modal.Window title="Delete Contact" name="delete-mobile">
                        <DeleteContact contactInfo={contactInfo}/>
                    </Modal.Window>
                </Modal>
            </StyledMobilePopup>
        </>
    )
}