// SearchBar.jsx

import React from 'react';
import './SearchBar.css'; // Import your CSS file

export default function SearchBar({ searchNote, handleTextChange }) {
    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <label htmlFor="searchTitle"></label>
                <input  
                    type="text"
                    value={searchNote}
                    id="searchTitle"
                    onChange={handleTextChange}
                    placeholder="Search Bar"
                />
            </div>
        </div>
    );
}
