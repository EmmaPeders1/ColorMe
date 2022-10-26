import React, { useState } from 'react';
import './DropDown.css';

const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState<String>();

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    const input = document.getElementById("ColorPicker") as HTMLInputElement | null;
    input!.value = value;
  };

  return (
    <div>
      <div className="dropdown-wrapper" >
        <select id="select" onChange={selectChange}>
        </select>
      </div>
    </div>
  )
}

export default DropDown;