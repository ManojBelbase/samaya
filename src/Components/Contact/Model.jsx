import React from "react";
import { createPortal } from "react-dom";

const Model = ({ isOpen, setIsOpen, popupheader, popupfooter, children }) => {
  return createPortal(
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed inset-0 flex items-center justify-center bg-white/40 px-4 ${isOpen ? "" : "hidden"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[500px] grow rounded-lg border bg-black p-4 text-white shadow-lg"
      >
        {popupheader}
        {/*<model>{children} </model>  */}
        {children}
        {popupfooter}
      </div>
    </div>,
    document.getElementById("portal"),
  );
};

export default Model;
