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
      </ul>
    </div>
  );
}
