import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {AdDesign} from './components/AdDesigner'
import { Votes } from './components/Votes';

function App() {
  return (
    <>
      <Header />
      <div  className="main">
      <AdDesign />
      <Votes/>
      </div>
    </>
  );
}

export default App;
