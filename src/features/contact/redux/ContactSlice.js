import { createSelector, createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json"

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
            console.log(action.payload)
            state.contactList = state.contactList.filter((contact) => contact.id !== action.payload)
        },
    }
});

export const filteredContactList = createSelector([(state) => state.contact.contactList, (state) => state.contact.searchKeyword],
(contactList, searchKeyword) => {
    return contactList.filter(contact => {
        return (contact.email.toLowerCase().includes(searchKeyword) || contact.phone.toLowerCase().includes(searchKeyword) || contact.address.toLowerCase().includes(searchKeyword) || (contact.name.toLowerCase().includes(searchKeyword)))
    })
    

})

export const contactListLength = createSelector((state) => state.contact.contactList, (contactListLength) => {return contactListLength.length})

export const {search, nextPage, previousPage, jumpToPage, addNewContact, updateContact, deleteContact} = contactSlice.actions
export default contactSlice.reducer