
import { useEffect, useState } from "react";

/**
 * useIsMobile - React hook to determine if the current device is mobile (by screen width)
 * @param {number} [breakpoint=768] - The max width (in px) to consider as mobile
 * @returns {boolean} isMobile
 */
function useIsMobile(breakpoint: number = 768): boolean {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
    );

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= breakpoint);
        }
        window.addEventListener("resize", handleResize);
        // Initial check in case of SSR hydration
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isMobile;
}

export default useIsMobile;