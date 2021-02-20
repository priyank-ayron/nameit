import React from 'react';
import './NameCard.css';

function NameCard(props) {
    return (
        <div className="result-name-card">
            <p className="result-name">{props.suggestedName}</p>
        </div>
    );
}

export default NameCard;
