import { FC, InputHTMLAttributes } from "react";
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
}

const Input: FC<InputProps> = ({name, ...rest}) => {
  return (
    <div className="input-wrapper">
      <input type = "text" id={name} minLength={7} maxLength={7} placeholder={"#B6D0E2"} {...rest}/>
    </div>
  );
};

export default Input;