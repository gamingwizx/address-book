import { useState, useEffect } from "react"
import mediaQueryBreakpoint from "../utils/mediaQuery"

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= parseInt(mediaQueryBreakpoint.extraSmall.replace("px", "")))
    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${mediaQueryBreakpoint.extraSmall})`)
        const handleResize = (e) => {
            setIsMobile(e.matches)
        }
        mediaQuery.addEventListener("resize", handleResize)

        return () => {
            mediaQuery.removeEventListener("resize", handleResize)
        }
    }, [])

    return isMobile
}