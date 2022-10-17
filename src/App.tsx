import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainDiv">
        <Input name={'ColorPicker'} label={'Type in a color:'} />
        <Button icon={faPaintBrush} label={' PAINT'} />
      </div>
    </div>
  );
}

export default App;
