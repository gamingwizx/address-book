import { useSelector } from "react-redux";
import { useEffect, useState, useRef, useMemo } from "react";
export default function usePage() {
    
    const {itemsPerPage, contactList, currentPage} = useSelector((store) => store.contact)
    const maxPageShown = 5
    const maxPage = Math.ceil(contactList.length / itemsPerPage)

    let startIndex = Math.max(1, currentPage - Math.floor(maxPageShown / 2))
    // let endIndex = Math.min(currentPage + maxPageShown, maxPage)
    const lastPageArray = useMemo(() => {
        return Array.from({ length: maxPageShown}, (_,i) => (maxPage - maxPageShown + 1) + i)
    })
    const pages = useMemo(() => {
        if ((maxPage - maxPageShown + 1) <= startIndex) {
            return lastPageArray
        }
        return Array.from({ length: maxPageShown}, (_,i) => startIndex + i)
    })

    return pages
}