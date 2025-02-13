import { useEffect, useRef } from "react";
import { useDropdownMenuOpeningContext } from "../context/DropdownMenuOpeningContext";

export default function useOutsideModal(handler, useCapture = true) {

    const ref = useRef()
    const {closeDropdownList} = useDropdownMenuOpeningContext()

    useEffect(() => {
        const handleClickOutsideModal = (e) => {
            if (ref.current && ref.current.contains(e.target)) {
                handler()
                closeDropdownList()
            }
        }

        window.addEventListener("click", handleClickOutsideModal, useCapture)

        return () => {
            window.removeEventListener("click", handleClickOutsideModal, useCapture)
        }
    }, [])

    return ref
}
