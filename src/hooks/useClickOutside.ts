import { useRef, useEffect, RefObject } from "react";
export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback?: () => void
): void => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current) {
      let isClickedOutside = true;
      const parentElement = ref.current;

      Array.from(parentElement.children).forEach((child) => {
        console.log("child", child);
        if (child?.contains(event.target as Node)) {
          isClickedOutside = false;
        }
      });

      if (isClickedOutside) {
        callback?.();
        console.log(ref.current);
      }
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      handleClickOutside(event);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback, handleClickOutside]);
};
