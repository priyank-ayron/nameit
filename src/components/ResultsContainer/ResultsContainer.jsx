import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';

function ResultsContainer(props) {
    const suggestedNamesJsx = props.suggestedNames.map((suggestedName) => {
        return <NameCard suggestedName={suggestedName}></NameCard>;
    });

    return <div className="results-container">{suggestedNamesJsx}</div>;
}

export default ResultsContainer;
