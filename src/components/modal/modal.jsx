import React, { useEffect, useRef } from "react";
import "./modal.css";
import { RiCloseLargeFill } from "@remixicon/react";

const Modal = ({ show, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal__wrap">
        <div className="modal__body" ref={modalRef}>
          <button className="modal__close" onClick={onClose}>
            <RiCloseLargeFill color="#fff" size={22} />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
