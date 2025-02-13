import { createContext, useContext, useEffect } from "react";
import data from "../data.json"
import { useState } from "react";

const ContactContext = createContext()

function ContactProvider({children}) {
    
    const [contactList, setContactList] = useState(() => {
        return data
    })
    const [contactListLength, setContactListLength] = useState(() => contactList.length)

    useEffect(() => {
        setContactListLength(() => contactList.length + 1)
    }, [contactList])
    
    const addNewContact = (contact) => {
        setContactList((contactList) => [...contactList, contact])
    }

    const deleteContact = (id) => {
        setContactList((contactList) => contactList.filter((contact) => contact.id != id))
    }

    const updateContact = (updatedContact) => {
        setContactList((contactList) => contactList.map(contact => contact.id === updatedContact.id ? updatedContact : contact ))
        console.log(contactList)
    }

    return (
        <ContactContext.Provider value={{contactList, addNewContact, deleteContact, updateContact, contactListLength}}>
            {children}
        </ContactContext.Provider>
    )
}

export function useContactContext() {
    const context = useContext(ContactContext)
    if (!context) throw new Error("Contact Context is used outside of Provider.")
    return context
}

export default ContactProvider