import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import styles from "./modal.module.scss";
import { useClickOutside } from "@/hooks/useClickOutside";
import classNames from "classnames";

type ModalProps = {
  isOpen: boolean;
  close: () => void;
};

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  isOpen,
  close,
}) => {
  const modalRef = useRef(null);
  const [innerIsOpen, setInnerIsOpen] = useState(isOpen);

  const handleClose = () => {
    close();
    document.body.style.overflow = "";
  };

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setInnerIsOpen(false);
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setInnerIsOpen(isOpen);
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  useClickOutside(modalRef, handleClose);

  return innerIsOpen ? (
    <div
      className={classNames(styles.modal_wrapper, {
        [styles.modal_close]: !isOpen,
      })}
      onAnimationEnd={handleAnimationEnd}
    >
      <div ref={modalRef} className={styles.modal}>
        {children}
      </div>
    </div>
  ) : null;
};
