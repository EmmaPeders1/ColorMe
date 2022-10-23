import { FC, InputHTMLAttributes } from "react";
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
}

const Input: FC<InputProps> = ({name, ...rest}) => {
  return (
    <div className="input-wrapper">
      <input id={name} {...rest} />
    </div>
  );
};

export default Input;