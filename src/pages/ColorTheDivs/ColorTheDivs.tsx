import ColorGrid from '../../components/ColorGrid/ColorGrid';
import DropDown from '../../components/DropDown/DropDown';
import Input from '../../components/Input/Input';
import $ from "jquery";
import './ColorTheDivs.css';


function ColorTheDivs() {
  populateDropDown();

  let colorDivs = document.querySelectorAll('div.color-div');
  colorDivs.forEach(occurence => {
    occurence.addEventListener('click', (e) => {
      let elementId = (e.target as HTMLDivElement).id;
      console.log("ElementID:" + elementId);

      let element = document.getElementById(elementId) as HTMLDivElement;

      let input = document.getElementById("ColorPicker") as HTMLInputElement;
      let value = input!.value;

      let errorMessage = document.getElementById("errorMessage") as HTMLParagraphElement | null;
      errorMessage!.style.display = "none";

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
    <div className="mainDiv" id="ok" >
    <p>Write a hex-color or get it by its name:</p>
      <div className="chooseDiv">
        <div>
          <Input name={'ColorPicker'}/>
        </div>
        <div>
          <DropDown/>
        </div>
      </div>
      <p id="errorMessage">Please have a valid input on the form #123456</p>
      <ColorGrid id={'colorGrid'} />
    </div>
  );
}

function populateDropDown(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://unpkg.com/color-name-list@9.21.0/dist/colornames.json", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // PARSE JSON DATA
        let colors = JSON.parse(xhr.responseText);

        let select = document.getElementById('select');
        $("select").empty().append('<option disabled>--Choose name--</option>');

        for (let i = 0; i < 17; i++) {
            select!.innerHTML = select!.innerHTML +
                '<option value="' + colors[i].hex + '">' + colors[i].name + '</option>';
        }
    }
  };
  xhr.send();
}


export default ColorTheDivs;
