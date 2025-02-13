import styled from "styled-components"

import Label from "../../components/Label"

import useIsMobile from "../../hooks/useIsMobile"
import DropdownMenuDesktop from "./DropdownMenuDesktop"

import mediaQueryBreakpoint from "../../utils/mediaQuery"
import PopupMobile from "./PopupMobile"
import { useDispatch, useSelector } from "react-redux"
import { closeAll, toggleDropdownToggleShow } from "./redux/UiSlice"
import { useDropdownMobileContext } from "./context/DropdownMobileContext"

const StyledContactInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 8fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "label info";
    gap: calc(var(--spacing) * 2);

    & label:nth-child(1) {
        grid-area: label;
        justify-self: end;
    }
    & label:nth-child(2) {
        grid-area: info;
        justify-self: flex-start;
    }

    @media (max-width: ${mediaQueryBreakpoint.extraSmall}) {
        gap: calc(var(--spacing));
    }

`

const StyledDropdownMenuContainer = styled.div`
    grid-area: contactDropdown;
`
const StyledContact = styled.div`
    display: flex;
    width: 100%;
    background-color: white;
    padding: calc(var(--spacing));
    border-radius: var(--border-radius);
    gap: calc(var(--spacing) * 2);
    display: grid;
    grid-template-columns: minmax(50px, 10%) minmax(200px, 1fr) minmax(10px, 5%);
    grid-template-rows: 100%;
    grid-template-areas:
    "contactPic contactInfo contactDropdown"; 
    position: relative;
    flex-basis: 25%;
    flex-grow: 1;

    @media (max-width:${mediaQueryBreakpoint.large}) {
        // gap: calc(var(--spacing));
        
    }

    @media (max-width: ${mediaQueryBreakpoint.extraSmall}) {
        display: flex;
        flex-direction: column;
        height: 25vh;
        padding: calc(var(--spacing) / 2);

        gap: calc(var(--spacing) / 2);
    }
`
const StyledContactPicture = styled.div`
    flex-basis: 20%; 
    background-size: cover;
    background-image: url('/profile.jpg');
    background-position: top;
    background-repeat: no-repeat;
    
    & img {
        object-fit: cover;
        width: 0%;
        height: 0%;
    }
        
    @media (max-width: ${mediaQueryBreakpoint.extraSmall}) {
        flex-basis: 60%;
        background-size: 100%;
    }
    
`
const StyledContactInfoLayout = styled.div`
    gap: var(--spacing);
    display: flex;
    flex-direction: column;
    @media (max-width: ${mediaQueryBreakpoint.extraSmall}) {
        flex-basis: 30%;
        gap: 0;
    }
`

export default function Contact({contactInfo}) {
    const {id, name, email, phone, address} = contactInfo
    const dispatch = useDispatch()

    /*Dropdown on mobile is handled with context because the value for `isShowMobileDropdown` would be overwritten with false by other contact component,
      causing the dropdown to not show.
    */
    const {activeDropdown, onHover} = useDropdownMobileContext()

    const isMobile = useIsMobile()
    
    const dropdownToggleShow = useSelector((store) => store.ui.dropdownToggleShow)
    
    const isShowDropdown = dropdownToggleShow === id.toString()
    const isShowMobileDropdown = activeDropdown === id.toString()

    const handleMouseEnter = () => {
        dispatch(toggleDropdownToggleShow(id.toString()))
        onHover(id.toString())
    }
    const handleMouseLeave = () => {
        dispatch(closeAll())
    }

    return (
        <StyledContact onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <StyledContactPicture/>
            <StyledContactInfoLayout>
                <Label size="large" color="primary" weight="bold">{name}</Label>
                <StyledContactInfo>
                    <Label>Email: </Label>
                    <Label color="primary">{email}</Label>
                </StyledContactInfo>
                <StyledContactInfo>
                    <Label>Phone: </Label>
                    <Label color="primary">{phone}</Label>
                </StyledContactInfo>
                <StyledContactInfo>
                    <Label>Address: </Label>
                    <Label color="primary">{address}</Label>
                </StyledContactInfo>
            </StyledContactInfoLayout>
            {(isShowDropdown && !isMobile) && 
            <StyledDropdownMenuContainer>
                <DropdownMenuDesktop contactInfo={contactInfo} name={id} />
            </StyledDropdownMenuContainer>
            }
            {(isShowMobileDropdown && isMobile) && 
            <PopupMobile contactInfo={contactInfo}/>}
            
        </StyledContact>
    )
}