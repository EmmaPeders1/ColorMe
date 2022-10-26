import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ColorDiv from '../../components/ColorDiv/ColorDiv';
import './Home.css';

export default function Home(){
  const [red, setRed] = useState(false);

  const handleClick = () => {
    let div = document.getElementById("singleDiv");
    if(red === false){
      div!.style.backgroundColor = "rgb(6, 6, 52)";
      setRed(true);
    }
    else{
      div!.style.backgroundColor = "powderblue";
      setRed(false);
    }
  }

  return(
    <div className="home">
      <h1>Home</h1>
      <h2>Welcome to ColorMe <FontAwesomeIcon icon={faPaintBrush}/></h2>
      <ColorDiv id={'singleDiv'}  onClick={handleClick}/>
    </div>
  );
}

