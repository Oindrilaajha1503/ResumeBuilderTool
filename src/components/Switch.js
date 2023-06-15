import React, { useState } from 'react';
import "./Switch.css";
import { IoIosCheckmark } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

function Switch() {
  const [toggleButton, setToggleButton] = useState(false);

  const handleClick = () => {
    setToggleButton(!toggleButton);
  };

  return (
    <div onClick={handleClick} className="toggle">
      {toggleButton ? (
        <div className="toggle-background-left">
          <div className="toggle-left">
            <IoIosClose className="close-icon" />
          </div>
        </div>
      ) : (
        <div className="toggle-background-right">
          <div className="toggle-right">
            <IoIosCheckmark className="checkmark-icon" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Switch;
