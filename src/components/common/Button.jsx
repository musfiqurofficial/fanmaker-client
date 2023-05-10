import { useState } from "react";
import ModalUI from "./ModalUI";

const Button = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <div className="inset-0">
        <button
          onClick={openModal}
          className="bg-[#19a0e4] px-6 py-3 mt-5 text-[25px] font-bold rounded-full border-b-4 border-white text-white transform hover:translate-y-[-10px] shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          APPLY NOW
        </button>
      </div>
      <ModalUI isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default Button;
