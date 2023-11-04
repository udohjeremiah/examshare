import { useEffect } from "react";

export default function useClickOutside(ref, triggerRef, handler) {
  useEffect(() => {
    const listener = (e) => {
      // Check if clicking ref's element or descendant elements, or the element that triggered it
      if (
        !ref?.current ||
        ref.current.contains(e.target) ||
        (triggerRef?.current && triggerRef.current.contains(e.target))
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
