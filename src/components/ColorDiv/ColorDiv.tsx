import { FC } from 'react';
import './ColorDiv.css';

interface ColorDivProps {
  onClick?: (e: React.MouseEvent) => void;
  id: string;
}

const ColorDiv: FC<ColorDivProps> = ({ onClick, id}) => {
  return (
    <div className='color-div-wrapper'>
      <div className='color-div' id={id} onClick={onClick} />
    </div>
  );
};

export default ColorDiv;
