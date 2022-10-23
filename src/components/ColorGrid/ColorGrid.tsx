import ColorDiv from '../ColorDiv/ColorDiv';
import './ColorGrid.css';

function ColorGrid() {
  return (
    <div className='div-wrapper'>
      <ColorDiv id={'1'} />
      <ColorDiv id={'2'} />
      <ColorDiv id={'3'} />
      <ColorDiv id={'4'} />
      <ColorDiv id={'5'} />
      <ColorDiv id={'6'} />
    </div>
  );
}

export default ColorGrid;
