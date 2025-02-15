import { cloneElement, useContext, useState, createContext } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import StyledLabel from "./Label";
import useOutsideModal from "../hooks/useOutsideModal";
import useIsMobile from "../hooks/useIsMobile";
import { toggleDropdown, toggleModal, closeAll } from "../features/contact/redux/UiSlice";
import { useDispatch, useSelector } from "react-redux";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(4px);
    z-index: 12;
`

const ModalWindow = styled.div`
    top: 0;
    width: ${(props) => props.isMobile === 'true' ? "100%" : "50%"};
    height: ${(props) => props.isMobile === 'true' ? "100%" : "50%"};
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: white;
    transform: ${(props) => props.isMobile === 'true' ? "" : "translate(50%, 50%)"};
    
`
const Header = styled.div`
    background-color: var(--primary-color);
    flex-basis: ${(props) => props.isMobile === 'true' ? "15%" : "10%"};
    display: flex;
    align-items: center;
    padding: var(--spacing) calc(var(--spacing) * 3);
    justify-content: space-between
`
const Content = styled.div`
    flex-basis: 80%;
    background-color: white;
    padding: var(--spacing);
`
const ModalLayout = styled.div`
    width: 100%;
    height: 100%;
`
const ModalMobileContext = createContext()

function Modal({children}) {
    const [modalOpened, setModalOpened] = useState("")
    const onModalOpened = (id) => {
        setModalOpened(id)
    }
    const closeModalMobile = () => {
        setModalOpened("")
    }

    return (
        <ModalMobileContext.Provider value={{modalOpened, onModalOpened, closeModalMobile}}>
            {children}
        </ModalMobileContext.Provider>
    )
}

function Open({children, name}) {

    const dispatch = useDispatch()
    const {onModalOpened} = useContext(ModalMobileContext)

    const handleOpenModal = () => {
        dispatch(toggleModal(name))
        onModalOpened(name)
    }
    return cloneElement(children, { onClick: handleOpenModal})
    
}

function Window({children, title, name}) {

    const closeModal = () => {
        closeModalMobile()
        dispatch(closeAll())
    }
    const ref = useOutsideModal()
    const dispatch = useDispatch()
    const {modalOpened, closeModalMobile} = useContext(ModalMobileContext)

    const isMobile = useIsMobile()
    if (modalOpened !== name) return null

    return createPortal(
        <Overlay>
            <ModalLayout ref={ref}/>
            <ModalWindow isMobile={`${isMobile}`}>
                <Header>
                    <StyledLabel size="large" color="white" weight="bold">{title}</StyledLabel>
                    <StyledLabel color="white" weight="bold" onClick={() => closeModal()}>X</StyledLabel>
                </Header>
                <Content>
                    {cloneElement(children)}
                </Content>

            </ModalWindow>
        </Overlay>,
        document.body
    )
}

export function useModalMobileOpen() {
    const context = useContext(ModalMobileContext)
    if (!context) throw new Error("Values in modal mobile context is used outside of the scope.")
    return context
}

Modal.Open = Open
Modal.Window = Window

export default Modal