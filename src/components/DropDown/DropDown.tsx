import React from 'react';
import './DropDown.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'

function DropDown() {
  return (

    <button
      onChange={onchange}>
      <FontAwesomeIcon icon={faPaintBrush} /> PAINT
    </button>
  );
}

function onchange(){
  console.log("hello");
}

export default DropDown;
