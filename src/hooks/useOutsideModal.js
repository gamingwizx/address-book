import { useEffect, useRef } from "react";
import { closeAll } from "../features/contact/redux/UiSlice";
import { useDispatch } from "react-redux";
export default function useOutsideModal(useCapture = true) {

    const ref = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        const handleClickOutsideModal = (e) => {
            if (ref.current && ref.current.contains(e.target)) {
                dispatch(closeAll())
            }
        }

        window.addEventListener("click", handleClickOutsideModal, useCapture)

        return () => {
            window.removeEventListener("click", handleClickOutsideModal, useCapture)
        }
    }, [])

    return ref
}
