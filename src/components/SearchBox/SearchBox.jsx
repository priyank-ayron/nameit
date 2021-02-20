import React from 'react';
import './SearchBox.css';

function SearchBox({ onInputChange }) {
    return (
        <div className="search-container">
            <input
                onChange={(event) => onInputChange(event.target.value)}
                placeholder="Type keywords"
                className="search-input"
            ></input>
        </div>
    );
}

export default SearchBox;
