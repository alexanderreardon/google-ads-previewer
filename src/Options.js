import React from 'react';

export default function Options( { logEvents }) {

    return (
        <div>
            <button 
                id="preview-button"
                className="options-button"    
                onClick={logEvents}
            >
            Preview Ads
            </button>
        </div>
    )
};
