import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import React, { OptionHTMLAttributes, SelectHTMLAttributes, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import ColorDiv from './components/ColorDiv/ColorDiv';
import ColorGrid from './components/ColorGrid/ColorGrid';
import DropDown from './components/DropDown/DropDown';
import Header from './components/Header/Header';
import Input from './components/Input/Input';


function App() {
  return (
    <div className="App" onLoad={populateDropDown}>
      <Header />
      <div className="mainDiv">
      {/*<ColorDiv id={"colorDiv"} onClick = {colorDivClick}/>*/}
      <ColorGrid />
      <p>Write a hex-color or get it by its name:</p>
        <div className="chooseDiv">
          <div>
            <Input name={'ColorPicker'} placeholder={"#B6D0E2"}/>
          </div>
          <div>
            <DropDown/>
          </div>
        </div>
        <Button onClick={buttonClick} icon={faPaintBrush} label={' COLOR'} />
        <p id="errorMessage">Please have a valid input on the form #XXXXXX</p>
      </div>
    </div>
  );
}

// TODO: add constraints to the input-field
function buttonClick(){
  const input = document.getElementById("ColorPicker") as HTMLInputElement | null;
  let value = input!.value;
  let errorMessage = document.getElementById("errorMessage") as HTMLParagraphElement | null;
  errorMessage!.style.visibility = "hidden";
  let colorDiv = document.getElementById("colorDiv") as HTMLDivElement | null;

  if(value !== "" && value.length === 7 && value.charAt(0) === "#" ){
    colorDiv!.style.backgroundColor = value;
    colorDiv!.style.border = "none";
  }
  else{
    errorMessage!.style.visibility = "inherit";
  }
}

function colorDivClick(){
  let colorDiv = document.getElementById("colorDiv") as HTMLDivElement | null;
  colorDiv!.style.border = "solid rgb(6, 6, 52)";
}

function populateDropDown(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://unpkg.com/color-name-list@9.21.0/dist/colornames.json", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // PARSE JSON DATA.
        let colors = JSON.parse(xhr.responseText);

        let element = document.getElementById('select');
        for (let i = 0; i < 17; i++) {
            element!.innerHTML = element!.innerHTML +
                '<option value="' + colors[i].hex + '">' + colors[i].name + '</option>';
        }
    }
  };
  xhr.send();
}

export default App;
