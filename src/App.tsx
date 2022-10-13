import React from 'react';
import './App.css';
import DropDown from './components/DropDown/DropDown';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainDiv">
        <DropDown />
      </div>
    </div>
  );
}

export default App;
