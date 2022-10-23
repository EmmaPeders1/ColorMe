import React from 'react';
import './App.css';
import ColorGrid from './components/ColorGrid/ColorGrid';
import DropDown from './components/DropDown/DropDown';
import Header from './components/Header/Header';
import Input from './components/Input/Input';


function App() {

  document.querySelectorAll('.color-div').forEach(occurence => {
    occurence.addEventListener('click', (e) => {
      let elementId = (e.target as HTMLDivElement).id;
      console.log("ElementID:" + elementId);

      const input = document.getElementById("ColorPicker") as HTMLInputElement;
      let value = input!.value;

      let errorMessage = document.getElementById("errorMessage") as HTMLParagraphElement | null;
      errorMessage!.style.display = "none";

      let element = document.getElementById(elementId) as HTMLDivElement;

      // TODO: add further constraints to the input-field
      // Do it in the input.tsx-file?
      if(value !== "" && value.length === 7 && value.charAt(0) === "#" ){
        element.style.backgroundColor = value;
        element.style.border = "none";
      }
      else{
        errorMessage!.style.display = "inline";
      }
    });
  });

  return (
    <div id="app" className="App" onLoad={populateDropDown}>
      <Header />
      <div className="mainDiv">
      <p>Write a hex-color or get it by its name:</p>
        <div className="chooseDiv">
          <div>
            <Input name={'ColorPicker'}/>
          </div>
          <div>
            <DropDown/>
          </div>
        </div>
        <p id="errorMessage">Please have a valid input on the form #XXXXXX</p>
        <ColorGrid id={'colorGrid'} />
      </div>
    </div>
  );
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
