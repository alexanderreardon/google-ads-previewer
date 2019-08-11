import React from 'react';
import AdTable from './AdTable.js';
import Options from './Options.js';
import AdPreviews from './AdPreviews.js';
import './App.css';



export default function App() {
  

  return (  
    <div className="app">
      Hello.
      <br />
      <AdTable />
      <br />
      <Options />
      <br />
      <AdPreviews />

      <div id="output">
        <p>Ad 1:</p>
        <p id="myOutput"></p>
      </div>
    </div>
  
  );
};