//colors from https://gist.github.com/raineorshine/10394189

import React from 'react';
import './DropDown.css';

function DropDown(this: any) {
  return (
    <div className="dropdown" onLoad={populateSelect}>
      <select id="select" onChange={() => show(this)}>
        <option value="">Select a color</option>
      </select>

      <p id="msg"></p>
    </div>
  );
}

function populateSelect() {
  // CREATE AN XMLHttpRequest OBJECT, WITH GET METHOD.
  var xhr = new XMLHttpRequest(),
      method = 'GET',
      overrideMimeType = 'application/json',
      url = './webcolors.json';        // ADD THE URL OF THE FILE.

  xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

          // PARSE JSON DATA.
          let colors = JSON.parse(xhr.responseText);

          let element = document.getElementById('select');
          for (let i = 0; i < colors.length; i++) {
              // BIND DATA TO <select> ELEMENT.
              element!.innerHTML = element!.innerHTML +
                  '<option value="' + i + '">' + colors[i].name + '</option>';
          }
      }
  };
  xhr.open(method, url, true);
  xhr.send();
}

function show(color:any) {
  // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
  var msg = document.getElementById('msg');
  msg!.innerHTML = 'Selected Color: <b>' + color.options[color.selectedIndex].text + '</b> </br>' +
      'ID: <b>' + color.value + '</b>';
}
export default DropDown;