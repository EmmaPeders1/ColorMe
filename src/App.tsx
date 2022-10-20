import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import ColorDiv from './components/ColorDiv/ColorDiv';
import Header from './components/Header/Header';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainDiv">
        <ColorDiv id={"colorDiv"} onClick = {colorDivClick}/>
        <Input name={'ColorPicker'} label={'Type in a hex-color: '} placeholder={"#B6D0E2"}/>
        <Button onClick={buttonClick} icon={faPaintBrush} label={' PAINT'} />
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
  colorDiv!.style.border = "thick solid black";
}

export default App;
