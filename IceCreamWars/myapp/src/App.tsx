import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {AdDesign} from './components/AdDesigner'
import { Votes } from './components/Votes';
import { Ad } from './components/Ad';

function App() {
  return (
    <>
      <Header user="Dave"/>
      <div className='ads'>
      <Ad flavor="chocolate" isLight={true} fontSize={12}/>
      <Ad flavor="vanilla" isLight={false} fontSize={15}/>
      <Ad flavor="strawberry" isLight={true} fontSize={10}/>
      </div>
      
      <div  className="main">
      <AdDesign />
      <Votes/>
      </div>
    </>
  );
}

export default App;

// create css to split 3 components across the screen
