import React from 'react';
// import Options from './Options.js';
import AdPreviews from './AdPreviews.js';
import './App.css';
import { HotTable } from '@handsontable/react'
import Handsontable from 'handsontable';

var initialData = [
  [1, "Headline 1 Example", "Headline 2 Example", "Headline 3 Example", "This is a Description 1 example.", "This is a Description 2 example.", "Path1", "Path2", "example.com"],
  [2, "Another Headline 1 Example", "Another Headline 2 Example", "Another Headline 3 Example","This is another Description 1 example.", "This is another Description 2 example.", "Path1", "Path2", "example.com"],
  [3, "Another Headline 1 Example", "Another Headline 2 Example", "Another Headline 3 Example","This is another Description 1 example.", "This is another Description 2 example.", "Path1", "Path2", "example.com"],
  [4, "Another Headline 1 Example", "Another Headline 2 Example", "Another Headline 3 Example","This is another Description 1 example.", "This is another Description 2 example.", "Path1", "Path2", "example.com"]
];

const columnHeaders = ["ID", "Headline 1", "Headline 2", "Headline 3", "Description 1", "Description 2", "Path 1", "Path 2", "Website Domain"]


class App extends React.Component {
  constructor(props) {
    super(props);
    this.id = 'hot';
    this.hotSettings = {
      data: initialData,
      colHeaders: columnHeaders,
      rowHeaders: true,
      width: 1400,
      manualColumnResize: true,
      observeChanges: true,
      //stretchH: 'all',
      //contextMenu: true,
      licenseKey: "non-commercial-and-evaluation"
    };
    this.hotTableComponent = React.createRef();
    this.state = {
      headline1: "Headline 1 Example"
    }

  }

  getTable() {
    
  }

  render() {
    return (
      <div className="app">
        Hello.
        <br />

        <HotTable
          ref={this.hotTableComponent}
          id={this.id}
          settings={this.hotSettings}
        />

        <AdPreviews />
        <button 
          id="preview-button"
          className="options-button"
          onClick=""
          >
          Preview Ads
        </button>

        <p>Ad 1, Headline 1:</p>
        <p>{this.state.headline1}</p>
        
      </div>
    );
  }
}

export default App;