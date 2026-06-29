import { useEffect, RefObject } from "react";

export default function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  triggerRef: RefObject<HTMLElement | null>,
  handler: () => void,
) {
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      // Check if clicking ref's element or descendant elements, or the element that triggered it
      if (
        !ref?.current ||
        ref.current.contains(e.target as Node) ||
        (triggerRef?.current && triggerRef.current.contains(e.target as Node))
      ) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, triggerRef, handler]);
}
