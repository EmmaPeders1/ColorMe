import { FC } from 'react';
import ColorDiv from '../ColorDiv/ColorDiv';
import './ColorGrid.css';

interface ColorGridProps {
  id: string;
}

const ColorGrid: FC<ColorGridProps> = ({ id }) => {
  return (
    <div className='div-wrapper' id={id}>
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
