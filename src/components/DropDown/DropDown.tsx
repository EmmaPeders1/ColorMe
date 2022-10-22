import React from 'react';
import './DropDown.css';

//colors from https://gist.github.com/raineorshine/10394189

function DropDown(this: any) {

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // PARSE JSON DATA.
        let colors = JSON.parse(xhr.responseText);

        let element = document.getElementById('select');
        for (let i = 0; i < 10; i++) {
            element!.innerHTML = element!.innerHTML +
                '<option value="' + i + '">' + colors[i].name + '</option>';
        }
    }
  };
  xhr.open("GET", "https://unpkg.com/color-name-list@9.21.0/dist/colornames.json", true);
  xhr.send();

  return (
    <div className="dropdown-wrapper" >
      <select id="select" onChange={show}>
        <option value="">Color name</option>
      </select>
      <p id="chosen-color"></p>
    </div>
  );
}

function show(color:any) {
  console.log(color.options);
  var chosenColor = document.getElementById('chosen-color');
  chosenColor!.innerHTML = 'Selected Color: <b>' + color.options[color.selectedIndex].text + '</b> </br>' +
      'ID: <b>' + color.value + '</b>';
}
export default DropDown;