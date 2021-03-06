import React, { useState } from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
    const [headerText, setHeaderText] = useState('Name It!');
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);

    const handleInputChange = (inputText) => {
        setHeaderExpanded(!inputText);
        if (inputText) {
            setSuggestedNames(name(inputText));
        } else {
            setSuggestedNames([]);
        }
    };

    const name = require('@rstacruz/startup-name-generator');

    return (
        <div>
            <Header
                headerExpanded={headerExpanded}
                headerTitle={headerText}
            ></Header>
            <SearchBox onInputChange={handleInputChange}></SearchBox>
            <ResultsContainer
                suggestedNames={suggestedNames}
            ></ResultsContainer>
            <Footer></Footer>
        </div>
    );
}

export default App;
