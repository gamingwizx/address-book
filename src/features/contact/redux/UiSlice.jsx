import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalOpen: "",
    dropdownOpen: "",
    dropdownMobileOpen: "",
    dropdownToggleShow: ""
}

const UiSlice = createSlice({
    name: "ui",
    initialState: initialState,
    reducers: {
        toggleDropdown: (state, action) => {
            state.dropdownOpen = action.payload
        },
        toggleDropdownToggleShow: (state, action) => {
            state.dropdownToggleShow = action.payload
            state.dropdownMobileOpen = action.payload
        },
        toggleModal: (state, action) => {
            state.modalOpen = action.payload
        },
        closeAll: (state) => {
            state.dropdownOpen = ""
            state.modalOpen = ""
            state.dropdownToggleShow = ""
            state.dropdownMobileOpen = ""
        },
    }
})

export const {toggleDropdown, toggleModal, closeAll, toggleDropdownToggleShow} = UiSlice.actions
export default UiSlice.reducer