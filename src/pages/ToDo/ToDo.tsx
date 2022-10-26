import './ToDo.css';

export default function ToDo(){

  return(
    <div className="toDo">
      <h1>ToDo</h1>
      <ul>
        <li>Save the state on 'Color the divs'</li>
          <ul>
            <li>Hook with UseState?</li>
            <li>Can become a color palette page</li>
            <li>Be able to get a color inbetween two colors</li>
            <li>Get some pre made palettes from an API?</li>
            <li>Be able to get saved palettes</li>
            <li>...and/or a page where the user can see the saved palettes</li>
          </ul>
        <li>Make a page where the user can get information about a color</li>
          <ul>
            <li>ColorPicker</li>
            <li>Input field</li>
            <li>Div with the color</li>
            <li>Show hex-code</li>
            <li>Show rgb-code</li>
          </ul>
      </ul>
    </div>
  );
}
