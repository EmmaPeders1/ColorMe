import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import ColorTheDivs from './pages/ColorTheDivs/ColorTheDivs';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import ToDo from './pages/ToDo/ToDo';
import ColorInfo from './pages/ColorInfo/ColorInfo';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colorTheDivs" element={<ColorTheDivs />} />
          <Route path="/toDo" element={<ToDo />} />
          <Route path="/colorInfo" element={<ColorInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;