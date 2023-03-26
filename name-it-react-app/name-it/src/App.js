import React, { useState } from "react";
import ResultsContainer from "./components/App/ResultsContainer/ResultsContainer";
import Header from "./components/App/Header/Header";
import SearchBox from "./components/App/SearchBox/SearchBox";
import "./App.css";

const name = require("@rstacruz/startup-name-generator");

function App() {
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  const handleInputChange = (inputText) => {
    setHeaderExpanded(!inputText);
    setSuggestedNames(inputText ? name(inputText) : []);
  };

  return (
    <div>
      <Header headerExpanded={headerExpanded} headTitle="Name It!" />
      <SearchBox onInputChange={handleInputChange} />
      <ResultsContainer suggestedNames={suggestedNames} />
    </div>
  );
}

export default App;
