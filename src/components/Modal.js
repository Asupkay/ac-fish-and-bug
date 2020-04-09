import React, {useEffect, useRef} from 'react';
import './Modal.css';

const Modal = ({ handleClose, show, children }) => {

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          handleClose();
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const showHideClassName = show ? 'modal display-flex' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <div ref={show ? wrapperRef : null} className="modal-main">
        <div className="close-button" onClick={handleClose}>X</div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
