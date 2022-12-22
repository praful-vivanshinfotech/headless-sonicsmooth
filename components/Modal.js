import React, { useEffect, useRef, useState } from "react";
import IconClose from "../public/icons/icon-close.svg";

const ModalData = ({ onRequestClose, modalBody, modalTitle }) => {
  const toggler = useRef();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        onRequestClose();
      }
      if (toggler.current && !toggler.current.contains(event.target)) {
        onRequestClose();
      }
    }
    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", onKeyDown);

    return () => {
      document.body.style.overflow = "visible";
      document.addEventListener("mousedown", onKeyDown);
    };
  }, []);

  return (
    <div className="modal-backdrop">
      <div ref={toggler} className="modal-container">
        <div className="modal-body">
          <div className="grid grid-cols-12 items-center">
            <h2 className="font-600 text-28 col-span-10">{modalTitle}</h2>
            <IconClose
              onClick={() => onRequestClose()}
              className="w-6 h-6 cursor-pointer dark:text-white col-span-2 ml-auto !text-primary"
            />
          </div>
          {modalBody}
        </div>
      </div>
    </div>
  );
};

export const Modal = ({ title, modalcontent, modalButton, className }) => {
  const [isModalOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };
  return (
    <>
      {isModalOpen && (
        <ModalData
          modalTitle={title}
          modalBody={modalcontent}
          onRequestClose={toggleModal}
        />
      )}
      <div className={className} onClick={toggleModal}>
        {modalButton}
      </div>
    </>
  );
};
