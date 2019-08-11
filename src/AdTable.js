import React, { useState, useEffect } from 'react';
import { HotTable } from '@handsontable/react'
import Handsontable from 'handsontable';

export default function AdTable() {

    var data = [
        [1, "Headline 1 Example", "Headline 2 Example", "Headline 3 Example", "This is a Description 1 example.", "This is a Description 2 example.", "Path1", "Path2", "example.com"],
        [2, "Another Headline 1 Example", "Another Headline 2 Example", "Another Headline 3 Example","This is another Description 1 example.", "This is another Description 2 example.", "Path1", "Path2", "example.com"],
        [3, "Another Headline 1 Example", "Another Headline 2 Example", "Another Headline 3 Example","This is another Description 1 example.", "This is another Description 2 example.", "Path1", "Path2", "example.com"],
        [4, "Another Headline 1 Example", "Another Headline 2 Example", "Another Headline 3 Example","This is another Description 1 example.", "This is another Description 2 example.", "Path1", "Path2", "example.com"]
    ];
    
    const columnHeaders = ["ID", "Headline 1", "Headline 2", "Headline 3", "Description 1", "Description 2", "Path 1", "Path 2", "Website Domain"];

    const [adCopy, setAdCopy] = useState(data);
    useEffect(() => {
        if (window.console) {
        console.log("AD COPY STATE: ");
        console.log(adCopy);
        }
    })

    var hotSettings =  {
        data: data,
        rowHeaders: true,
        colHeaders: columnHeaders,
        filters: true,
        observeChanges: true,
        //stretchH: 'all',
        //contextMenu: true,
        licenseKey: "non-commercial-and-evaluation"
    };

    var hooks = Handsontable.hooks.getRegistered();

    hooks.forEach(function(hook) {
        if (hook === 'afterChange') {
            hotSettings[hook] = function() {
            log_events(hook);
            }
        }
    })
    
    function log_events(event) {
        var vals, str;
        vals = [event];

        for (var d = 0; d < data.length; d++) {
            try {
            str = JSON.stringify(data[d]);
            }
            catch (e) {
            str = data[d].toString(); // JSON.stringify breaks on circular reference to a HTML node
            }

            if (str === void 0) {
            continue;
            }

            if (d < data.length - 1) {
            str += ',';
            }
            vals.push(str);
        }

        if (window.console) {
            console.log("DATA: " + data);
            console.log("EVENT: " + event);
            console.log("VALS: " + vals)
            console.log("AD COPY STATE (afterChange): ");
            console.log(adCopy);
        }

        setAdCopy(data);
    }
    
    return (
        <div id="ht">
        <HotTable
          settings={hotSettings}
        />
      </div>
    )
};