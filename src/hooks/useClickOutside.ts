import { MutableRefObject, useEffect, useRef } from "react";

const useClickOutside = (cb: (event: Event) => void) => {

    const ref: MutableRefObject<HTMLElement | null> = useRef(null)

    useEffect(() => {

        const listener: EventListenerOrEventListenerObject = (event) => {
            if (!ref?.current || ref.current.contains(event?.target as Node)) {
                return;
            }

            cb(event);
        }

        document.addEventListener("mousedown", listener)

        return () => {
            document.removeEventListener("mousedown", listener)
        }
    }, [ref, cb]);

    return ref;
}

export default useClickOutside