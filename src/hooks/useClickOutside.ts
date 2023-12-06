import { useRef, useEffect, RefObject } from "react";
export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback?: () => void
): void => {
  const handleClickOutside = (event: MouseEvent) => {
    console.log(ref.current);
    if (ref.current) {
      let isClickedOutside = true;
      const parentElement = ref.current;

      // перебираємо всіх дітей батьківського елемента

      Array.from(parentElement.children).forEach((child) => {
        console.log("child", child);
        if (child?.contains(event.target as Node)) {
          // якщо клікнуто на одного з дітей, то це не клік поза батьківським елементом
          isClickedOutside = false;
        }
      });
      console.log(isClickedOutside);
      // якщо клік поза всіма дітьми, викликаємо callback
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
