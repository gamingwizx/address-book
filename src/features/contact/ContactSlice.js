import { createReducer, createSelector, createSlice } from "@reduxjs/toolkit";
import { getCurrentPage, getItemsPerPage } from "./paginationSlice";
import data from "../../data.json"

const intialState = {
    contactList: data,
    searchKeyword: "",
}

const contactSlice = createSlice({
    name: "contact",
    initialState: intialState,
    reducers: {
        search: (state, action) => {
            state.searchKeyword = action.payload.toLowerCase()
        },
        addNewContact: (state,action) => {
            state.contactList = [...state.contactList, action.payload]
        },
        updateContact: (state,action) => {
            state.contactList = state.contactList.map((contact) => contact.id === action.payload.id ? action.payload : contact)
        },
        deleteContact: (state,action) => {
            state.contactList = state.contactList.filter((contact) => contact.id !== action.payload)
        },
    }
});

export const filteredContactList = createSelector([(state) => state.contact.contactList, (state) => state.contact.searchKeyword],
(contactList, searchKeyword) => {

    return contactList.filter(contact => {
        return (contact.email.toLowerCase().includes(searchKeyword) || contact.phone.toLowerCase().includes(searchKeyword) || contact.address.toLowerCase().includes(searchKeyword) || (contact.name.toLowerCase().includes(searchKeyword)))})
    

})

export const {search, nextPage, previousPage, jumpToPage, addNewContact, updateContact, deleteContact} = contactSlice.actions
export default contactSlice.reducer