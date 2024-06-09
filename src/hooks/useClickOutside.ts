import { MutableRefObject, useEffect, useRef } from "react";

const useClickOutside = (cb: (event: Event) => void) => {

    const ref: MutableRefObject<any> = useRef(null)

    useEffect(() => {

        const listener: EventListenerOrEventListenerObject = (event) => {
            if (!ref || !ref.current || ref.current.contains(event.target)) {
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